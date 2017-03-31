import actionTypes from './actionTypes'

export const isLogged = (boolean) => {
  return {
    type: actionTypes.IS_LOGGED,
    payload: boolean
  }
}

export const accessGranted = (response) => {
  //save accessToken in localStorage to reuse it in API calls
  localStorage.setItem("accessToken", response.accessToken);
  return {
    type: actionTypes.ACCESS_GRANTED,
    payload: response,
    accessToken: response.accessToken
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

export const courseworksRetrieved = (courseWorks) => {
  return {
    type: actionTypes.COURSE_WORKS_RETRIEVED,
    payload: courseWorks,
    hasCourseWorks: true
  }
}

export const courseWorksLoaded = (boolean) => {
  return {
    type: actionTypes.COURSE_WORKS_LOADED,
    payload: boolean
  }
}

export const submissionsRetrieved = (response) => {
  return {
    type: actionTypes.SUBMISSIONS_RETRIEVED,
    payload: response
  }
}

export const submissionsLoaded = (boolean) => {
  return {
    type: actionTypes.SUBMISSIONS_LOADED,
    payload: boolean
  }
}

export const globalPointsCalculated = (points) => {
  return {
    type: actionTypes.GLOBAL_POINTS_CALCULATED,
    payload: points
  }
}
