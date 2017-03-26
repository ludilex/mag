export default function classroomReducer(state={}, action) {

  switch (action.type) {
    case 'API_SUCCESFUL_RESPONSE':
      return Object.assign({}, state, {
        coursesList: action.payload,
        hasCourses: true
      })
    case 'COURSEWORKS_RETRIEVED':
      return Object.assign({}, state, {
        courseWorksList: action.payload
      })
    case 'COURSE_SELECTED':
      return Object.assign({}, state, {
        currentCourseSelected: action.payload
      })
    default:
      return state
  }
}
