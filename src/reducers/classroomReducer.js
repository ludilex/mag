export default function classroomReducer(state={}, action) {

  switch (action.type) {

    case 'COURSES_LOADED':
      return Object.assign({}, state,  {
        coursesList: action.payload
      })

    case 'COURSE_SELECTED':
      return Object.assign({}, state, {
        currentCourseSelected: action.payload
      })

    case 'RESET_COURSE_SELECTED':
      return Object.assign({}, state, {
        currentCourseSelected: ''
      })

    case 'COURSE_WORKS_LOADED':
      return Object.assign({}, state, {
        courseWorksList: action.payload
      })

    case 'RESET_COURSE_WORKS':
      return Object.assign({}, state, {
        courseWorksList: []
      })

    case 'RESET_SUBMISSIONS':
      return Object.assign({}, state, {
        studentSubmissions: []
      })

    case 'SUBMISSIONS_LOADED':
      return Object.assign({}, state, {
        studentSubmissions: state.studentSubmissions.concat(action.payload)
      })

    default:
      return state
  }
}
