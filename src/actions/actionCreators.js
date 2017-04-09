import actionTypes from './actionTypes'

export const isLogged = (boolean) => {
  return {
    type: actionTypes.IS_LOGGED,
    payload: boolean
  }
}

export const loginDataSaved = (response) => {

  return {
    type: actionTypes.LOGIN_DATA_SAVED,
    payload: response,
    accessToken: response.accessToken
  }
}

export const accessGranted = () => {

  return {
    type: actionTypes.ACCESS_GRANTED
  }
}

export const changeFetchingStatus = (boolean) => {
  return {
    type: actionTypes.CHANGE_FETCHING_STATUS,
    payload: boolean
  }
}

export const changeLoginStatus = (boolean) => {
  return {
    type: actionTypes.CHANGE_LOGIN_STATUS,
    payload: boolean
  }
}

export const logout = () => {
  return {
    type: actionTypes.LOGOUT
  }
}

export const coursesLoaded = (boolean) => {
  return {
    type: actionTypes.COURSES_LOADED,
    payload: boolean
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

export const resetCourseSelected = () => {
  return {
    type: actionTypes.RESET_COURSE_SELECTED
  }
}

export const courseworksRetrieved = (courseWorks) => {
  return {
    type: actionTypes.COURSE_WORKS_RETRIEVED,
    payload: courseWorks
  }
}

export const courseWorksLoaded = (boolean) => {
  return {
    type: actionTypes.COURSE_WORKS_LOADED,
    payload: boolean
  }
}

export const resetCourseWorks = () => {
  return {
    type: actionTypes.RESET_COURSE_WORKS
  }
}

export const resetSubmissions = () => {
  return {
    type: actionTypes.RESET_SUBMISSIONS
  }
}

export const submissionRetrieved = (response) => {
  return {
    type: actionTypes.SUBMISSION_RETRIEVED,
    payload: response
  }
}

export const submissionsLoaded = (response) => {
  return {
    type: actionTypes.SUBMISSIONS_LOADED,
    payload: response
  }
}

export const resetPoints = () => {
  return {
    type: actionTypes.RESET_POINTS
  }
}

export const globalPointsCalculated = (points) => {
  return {
    type: actionTypes.GLOBAL_POINTS_CALCULATED,
    payload: points
  }
}
