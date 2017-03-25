import { SUMA_VALOR, RESTA_VALOR } from '../actions/index'

export default function operacionesReducer(state = {}, action) {

  switch (action.type) {
    case SUMA_VALOR:
        return Object.assign({}, state, {
           valor: state.valor + action.payload
      })
    case RESTA_VALOR:
        return Object.assign({}, state, {
           valor: state.valor - action.payload
    })
    default:
      return state
  }
}
