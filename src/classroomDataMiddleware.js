import axios from 'axios'
import {
  changeLoginStatus,
  coursesRetrieved,
  requestError,
  coursesLoaded,
  courseworksRetrieved,
  hasCourseWorks,
  submissionsRetrieved,
  courseSelected,
  //globalPointsCalculated,
  resetSubmissions
 } from './actions/actionCreators'


axios.defaults.baseURL = 'https://classroom.googleapis.com';

const classroomDataMiddleware = (store) => (next) => (action) => {

  switch(action.type) {

    case 'LOGOUT':

        store.dispatch(dispatch => {
          dispatch(changeLoginStatus(false))
        })
        localStorage.clear()
        next(action)
      break

    case 'ACCESS_GRANTED':
      axios({
        method: 'get',
        url: '/v1/courses/',
        headers: {'Authorization': "Bearer " + store.getState().loginReducer.accessToken}
      })
      .then((response) => {
        //console.log(response.data.courses);
        store.dispatch((dispatch) => {
          dispatch(coursesRetrieved(response.data.courses))
          dispatch(coursesLoaded(true))
          dispatch(courseSelected(response.data.courses[0].id))
          dispatch(resetSubmissions())
        })
      })
      .catch((error) => {
        store.dispatch((dispatch) => {
          const errorCode = error.response.data.error.code;
          if(errorCode === 401) {
            console.log("Access Token expired!");
            dispatch(changeLoginStatus(false))
          }
          dispatch(requestError(error.response))
        })
      })
      break

    case 'COURSE_SELECTED':

        const courseSelectedId = action.payload
        axios({
          method: 'get',
          url: '/v1/courses/' + courseSelectedId + '/courseWork',
          headers: {'Authorization': "Bearer " + store.getState().loginReducer.accessToken}
        })
        .then( response => {
          store.dispatch((dispatch) => {

            if(response.data.courseWork === undefined) {
              dispatch(hasCourseWorks(false))
            } else {
              dispatch(courseworksRetrieved(response.data.courseWork))
              dispatch(hasCourseWorks(true))
              next(action)
            }
          })
        })
        .catch((error) => {
          store.dispatch((dispatch) => {
            const errorCode = error.response.data.error.code;
            if(errorCode === 401) {
              console.log("Access Token expired!");
              dispatch(changeLoginStatus(false))
              //localStorage.clear()
            }
            dispatch(requestError(error.response))
          })
        })

      break;

    case 'HAS_COURSE_WORKS':
      const courseWorks = store.getState().classroomReducer.courseWorksList;
      courseWorks.map(courseWork => {
          axios({
            method: 'get',
            url: 'v1/courses/' + courseWork.courseId + "/courseWork/" + courseWork.id + "/studentSubmissions",
            headers: {'Authorization': "Bearer " + store.getState().loginReducer.accessToken}
          })
          .then( response => {
            if(response.data.studentSubmissions !== undefined) {
              //var points = response.data.studentSubmissions[0].assignedGrade
              store.dispatch((dispatch) => {
                dispatch(submissionsRetrieved(response.data.studentSubmissions[0]))
                //dispatch(globalPointsCalculated(points))
                next(action)
              })
            }
          })
          .catch((error) => {
            store.dispatch((dispatch) => {
              const errorCode = error.response.data.error.code;
              if(errorCode === 401) {
                console.log("Access Token expired!");
                dispatch(changeLoginStatus(false))
                //localStorage.clear()
              }
              dispatch(requestError(error.response))
            })
          })
          return true
        })
      break;

    default:
      next(action)
  }
}



export default classroomDataMiddleware
