import {combineReducers} from 'redux'
import loginReducer from './loginReducer'
import classroomReducer from './classroomReducer'
import gamificationReducer from './gamificationReducer'
import uiReducer from './uiReducer'

export default combineReducers({
  loginReducer: loginReducer,
  classroomReducer: classroomReducer,
  gamificationReducer: gamificationReducer,
  uiReducer: uiReducer
})
