export default function classroomReducer(state={}, action) {

  switch (action.type) {
    case 'COURSES_RETRIEVED':
      return Object.assign({}, state, {
        coursesList: action.payload
      }, {hasCourses: true})


    case 'COURSEWORKS_RETRIEVED':
      return Object.assign({}, state, {
        courseWorksList: state.courseWorksList.concat(action.payload)
      }, {hasCourseWorks: true})


    case 'HAS_COURSEWORKS':
      return Object.assign({}, state, {
        hasCourseWorks: true
      })


    case 'COURSE_SELECTED':
      return Object.assign({}, state, {
        currentCourseSelected: action.payload
      })

    default:
      return state
  }
}
