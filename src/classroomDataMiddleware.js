import axios from 'axios'
import { coursesRetrieved, requestError, courseworksRetrieved } from './actions/actionCreators'

var accessToken = ''
const classroomDataMiddleware = (store) => (next) => (action) => {

  switch(action.type) {
    case 'HAS_LOGGED':
      accessToken = action.payload.accessToken
      axios({
        method: 'get',
        headers: { 'Authorization': 'Bearer ' + accessToken },
        url: 'https://classroom.googleapis.com/v1/courses/'
      })
      .then((response) => {
        store.dispatch((dispatch) => {
          dispatch(coursesRetrieved(response.data.courses))
        })
        next(action)
      })
      .catch((error) => {
        store.dispatch((dispatch) => {
          dispatch(requestError(error))
        })
      })
      break;
    case 'COURSE_SELECTED':
      console.log(accessToken);
      axios({
        method: 'get',
        header: { 'Authorization': 'Bearer' + accessToken },
        url: 'https://classroom.googleapis.com/v1/courses/' + action.payload + '/courseWork/'
      })
      .then((response) => {
        store.dispatch((dispatch) => {
          dispatch(courseworksRetrieved(response))
        })
        next(action)
      })
      .catch((error) => {
        console.log(error);
      })
      break;
    default:
      next(action)
  }
}



export default classroomDataMiddleware
