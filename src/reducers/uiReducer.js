export default function uiReducer(state = {}, action) {

  switch (action.type) {
    case 'REQUEST_ERROR':
      return Object.assign({}, state, {
        //loginData: action.payload,
        errors: state.uiReducer.errors.concat(action.payload)
      })

    case 'CHANGE_FETCHING_STATUS':
      return Object.assign({}, state, {
        isFetching: action.payload
      })

    default:
      return state
  }
}
