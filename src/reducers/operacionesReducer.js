export default function operacionesReducer(state = 0, action) {

  switch (action.type) {
    case 'SUMA':
        return Object.assign({}, state, {
           valor: state.valor + action.payload
      })
    case 'RESTA':
        return Object.assign({}, state, {
           valor: state.valor - action.payload
    })
    default:
      return state
  }
}
