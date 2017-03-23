export default function loginReducer(state = {}, action) {

  switch (action.type) {
    case 'HAS_LOGGED':
      return Object.assign({}, state, {
        loginData: action.payload,
        isLogged: true
      })
    default:
      return state
  }
}
