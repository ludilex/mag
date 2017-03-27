export default function gamificationReducer(state={}, action) {

  switch(action.type) {
    case 'GLOBAL_POINTS_CALCULATED':
      return Object.assign({}, state, {
        globalPoints: action.payload
      })
    default:
      return state
  }
}
