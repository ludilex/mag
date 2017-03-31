import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducers/index'
import classroomDataMiddleware from './classroomDataMiddleware'
import ReduxThunk from 'redux-thunk'

const initialState = {
  loginReducer: {
    profile: {},
    accessToken: {},
    isLogged: false
  },
  classroomReducer: {
    hasCourses: false,
    coursesList: [],
    currentCourseSelected: "all",
    hasCourseWorks: false,
    courseWorksList: [],
    hasSubmissions: false,
    studentSubmissions: [],
  },
  gamificationReducer: {
    currentLevel: 0,
    globalPoints: 0,
    coursePoints: [],
    badgesEarned: []
  },
  uiReducer: {
    error: {}
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export default
  createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(classroomDataMiddleware, ReduxThunk)))
