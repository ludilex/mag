export default function classroomReducer(state={}, action) {

  switch (action.type) {

    case 'COURSES_RETRIEVED':
      return Object.assign({}, state, {
        coursesList: action.payload,
        hasCourses: true
      })

    case 'COURSES_LOADED':
      return Object.assign({}, state,  {
        hasCourses: action.payload
      })

    case 'COURSE_WORKS_RETRIEVED':
      return Object.assign({}, state, {
        courseWorksList: action.payload
      })

    case 'COURSE_WORKS_LOADED':
      return Object.assign({}, state, {
        hasCourseWorks: action.payload
      })

    case 'RESET_SUBMISSIONS':
      return Object.assign({}, state, {
        studentSubmissions: []
      })
      
    case 'SUBMISSIONS_RETRIEVED':
      return Object.assign({}, state, {
        studentSubmissions: state.studentSubmissions.concat(action.payload)
      })

    case 'SUBMISSIONS_LOADED':
      return Object.assign({}, state, {
        hasSubmissions: action.payload
      })

    case 'HAS_COURSE_WORKS':
      return Object.assign({}, state, {
        hasCourseWorks: action.payload
      })

    case 'COURSE_SELECTED':
      return Object.assign({}, state, {
        currentCourseSelected: action.payload
      })

    default:
      return state
  }
}
