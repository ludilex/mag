export default function classroomReducer(state={}, action) {

  switch (action.type) {
    case 'API_SUCCESFUL_RESPONSE':
      return Object.assign({}, state, {
        coursesList: action.payload,
        hasCourses: true
      })
    default:
      return state
  }
}
