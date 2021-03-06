import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducers/index'
import classroomDataMiddleware from './classroomDataMiddleware'
import ReduxThunk from 'redux-thunk'
import { loadState } from './localStorage'

const dataStructure = {
  loginReducer: {
    profile: {},
    accessToken: "",
    isLogged: false
  },
  classroomReducer: {
    coursesList: [],
    currentCourseSelected: "",
    courseWorksList: [],
    studentSubmissions: [],
  },
  gamificationReducer: {
    currentLevel: 0,
    globalPoints: 0,
    coursePoints: [],
    badgesEarned: []
  },
  uiReducer: {
    errors: {},
    isFetching: false
  }
}

//localStorage.clear() //uncomment to reset app
var initialState = {}
const persistedState = loadState();

if (persistedState === undefined) {
  initialState = dataStructure
}else {
  initialState = persistedState
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export default
  createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(classroomDataMiddleware, ReduxThunk)))
