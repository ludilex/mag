import {combineReducers} from 'redux'
import loginReducer from './loginReducer'
import classroomReducer from './classroomReducer'
import gamificationReducer from './gamificationReducer'

export default combineReducers({
  loginReducer: loginReducer,
  classroomReducer: classroomReducer,
  gamificationReducer: gamificationReducer
})
