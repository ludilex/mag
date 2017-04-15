export default function gamificationReducer(state={}, action) {

  switch(action.type) {
    case 'GLOBAL_POINTS_CALCULATED':

      return Object.assign({}, state, {
        globalPoints: action.payload
      })

    case 'RESET_POINTS':
      return Object.assign({}, state, {
        globalPoints: 0
      })
    default:
      return state
  }
}
