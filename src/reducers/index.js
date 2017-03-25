import {combineReducers} from 'redux'
import loginReducer from './loginReducer'
import classroomReducer from './classroomReducer'

export default combineReducers({
  loginReducer: loginReducer,
  classroomReducer: classroomReducer
})
