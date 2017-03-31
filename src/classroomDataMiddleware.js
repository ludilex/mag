import axios from 'axios'
import {
  coursesRetrieved,
  requestError,
  courseworksRetrieved,
  //submissionsRetrieved,
  //hasCourseWorks,
  //isLogged,
  coursesLoaded,
  courseWorksLoaded,
  //submissionsLoaded
 } from './actions/actionCreators'

var accessToken = localStorage.getItem("accessToken")
axios.defaults.baseURL = 'https://classroom.googleapis.com';
axios.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken;

const classroomDataMiddleware = (store) => (next) => (action) => {

  switch(action.type) {

    case 'IS_LOGGED':
      axios({
        method: 'get',
        url: '/v1/courses/'
      })
      .then((response) => {
        store.dispatch((dispatch) => {
          dispatch(coursesRetrieved(response.data.courses))
          dispatch(coursesLoaded(true))
        })
      })
      .catch((error) => {
        store.dispatch((dispatch) => {
          console.log(error);
          dispatch(requestError(error))
        })
      })
      break

    case 'COURSES_LOADED':

        const courses = store.getState().classroomReducer.coursesList

        courses.map( course => {
            axios({
              method: 'get',
              url: '/v1/courses/' + course.id + '/courseWork'
            })
            .then( response => {
              store.dispatch((dispatch) => {
                dispatch(courseworksRetrieved(response.data.courseWork))
                dispatch(courseWorksLoaded(true))
              })
            })
            .catch((error) => {
              console.log(error);
              store.dispatch((dispatch) => {
                dispatch(requestError(error))
              })
            })
        })
      break;

    /*case 'COURSE_WORKS_RETRIEVED':
      const courseWorks = action.payload
      next(action)
      //const courseWorks = store.getState().classroomReducer.courseWorksList;
      if(courseWorks !== undefined) {
          courseWorks.map(courseWork => {
            axios({
              method: 'get',
              url: 'v1/courses/' + courseWork.courseId + "/courseWork/" + courseWork.id + "/studentSubmissions"
            })
            .then( response => {
              if(response.data.studentSubmissions !== undefined) {
                store.dispatch((dispatch) => {
                  dispatch(submissionsRetrieved(response.data.studentSubmissions))
                  dispatch(submissionsLoaded(true))
                })
              }
            })
            .catch(error => {
              console.log(error);
              store.dispatch((dispatch) => {
                dispatch(requestError(error))
              })
            })
          })
        }
      break;*/

    default:
      next(action)
  }
}



export default classroomDataMiddleware
