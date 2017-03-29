import actionTypes from './actionTypes'

export const hasLogged = (response) => {
  return {
    type: actionTypes.HAS_LOGGED,
    payload: response
  }
}

export const requestError = (payload) => {
  return {
    type: actionTypes.REQUEST_ERROR,
    payload: payload
  }
}

export const coursesRetrieved = (response) => {
  return {
    type: actionTypes.COURSES_RETRIEVED,
    payload: response
  }
}

export const courseSelected = (courseId) => {
  return {
    type: actionTypes.COURSE_SELECTED,
    payload: courseId
  }
}

export const courseworksRetrieved = (response) => {
  return {
    type: actionTypes.COURSEWORKS_RETRIEVED,
    payload: response
  }
}

export const submissionsRetrieved = (response) => {
  return {
    type: actionTypes.SUBMISSIONS_RETRIEVED,
    payload: response
  }
}

export const globalPointsCalculated = (points) => {
  return {
    type: actionTypes.GLOBAL_POINTS_CALCULATED,
    payload: points
  }
}
