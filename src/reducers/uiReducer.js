export default function uiReducer(state = {}, action) {

  switch (action.type) {
    case 'REQUEST_ERROR':
      return Object.assign({}, state, {
        //loginData: action.payload,
        error: action.payload
      })
    default:
      return state
  }
}
