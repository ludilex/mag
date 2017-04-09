import axios from 'axios'
import {
  changeFetchingStatus,
  changeLoginStatus,
  requestError,
  coursesLoaded,
  courseWorksLoaded,
  resetCourseSelected,
  resetCourseWorks,
  resetSubmissions,    
  resetPoints
 } from './actions/actionCreators'


axios.defaults.baseURL = 'https://classroom.googleapis.com';

const classroomDataMiddleware = (store) => (next) => (action) => {

  switch(action.type) {

    case 'LOGOUT':
        localStorage.clear()
        store.dispatch(dispatch => {
          dispatch(changeLoginStatus(false))
        })
        next(action)
      break

    case 'ACCESS_GRANTED':
      store.dispatch(dispatch => {
        dispatch(changeFetchingStatus(true))
      })
      axios({
        method: 'get',
        url: '/v1/courses/',
        headers: {'Authorization': "Bearer " + store.getState().loginReducer.accessToken}
      })
      .then((response) => {
        store.dispatch((dispatch) => {
          dispatch(coursesLoaded(response.data.courses))
          dispatch(resetCourseSelected())
          dispatch(changeFetchingStatus(false))
        })
      })
      .then(next(action))
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
        //validate if the user selected the same course to avoid unnesesary reloadings
        if(courseSelectedId !== store.getState().classroomReducer.currentCourseSelected) {
          store.dispatch(dispatch => {
            dispatch(changeFetchingStatus(true))
          })
          axios({
            method: 'get',
            url: '/v1/courses/' + courseSelectedId + '/courseWork',
            headers: {'Authorization': "Bearer " + store.getState().loginReducer.accessToken}
          })
          .then( response => {
            store.dispatch((dispatch) => {
              dispatch(resetSubmissions())
              dispatch(resetPoints())
              dispatch(resetCourseWorks())
              dispatch(changeFetchingStatus(false))
              if(response.data.courseWork !== undefined) {
                dispatch(courseWorksLoaded(response.data.courseWork))
              }
            })
          })
          .then ( next(action) )
        } else {
          next(action)
        }
      break;

    /* case 'SUBMISSION_RETRIEVED':
        store.dispatch(dispatch => {
          dispatch(submissionsLoaded(action.payload))
        })
      break

    case 'SUBMISSIONS_LOADED':
        if(action.payload !== undefined){
          const points = action.payload[0].assignedGrade;
          if(points !== undefined){
            store.dispatch(dispatch => {
              dispatch(globalPointsCalculated(points))
            })
          }
        }else {
          next(action)
        }

      break;*/

    default:
      next(action)
  }
}



export default classroomDataMiddleware
