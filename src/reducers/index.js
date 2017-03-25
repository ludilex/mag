import {combineReducers} from 'redux'
import loginReducer from './loginReducer'
import operacionesReducer from './operacionesReducer'
import classroomReducer from './classroomReducer'

export default combineReducers({
  loginReducer: loginReducer,
  operacionesReducer: operacionesReducer,
  classroomReducer: classroomReducer
})
