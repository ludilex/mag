export default function loginReducer(state = {}, action) {

  switch (action.type) {
    case 'LOGIN_DATA_SAVED':
      return Object.assign({}, state, {
        profile: action.payload.profileObj,
        accessToken: action.payload.accessToken,
        isLogged: true
      })

    case 'CHANGE_LOGIN_STATUS':
      return Object.assign({}, state, {
        isLogged: action.payload
      })

    default:
      return state
  }
}
