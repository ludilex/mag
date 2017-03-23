import {combineReducers} from 'redux'
import loginReducer from './loginReducer'
import operacionesReducer from './operacionesReducer'

export default combineReducers({
  loginReducer: loginReducer,
  operacionesReducer: operacionesReducer
})
