export default function loginReducer(state = {}, action) {

  switch (action.type) {
    case 'ACCESS_GRANTED':
      return Object.assign({}, state, {
        profile: action.payload.profileObj,
        accessToken: action.payload.accessToken,
        isLogged: true
      })

    case 'IS_LOGGED':
      return Object.assign({}, state, {
        isLogged: action.payload
      })
      
    default:
      return state
  }
}
