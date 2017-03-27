export const HAS_LOGGED = 'HAS_LOGGED'
export const GOT_ACCESS_TOKEN = 'GOT_ACCESS_TOKEN'
export const COURSE_SELECTED = 'COURSE_SELECTED'
export const COURSES_RETRIEVED = 'COURSES_RETRIEVED'
export const COURSEWORKS_RETRIEVED = 'COURSEWORKS_RETRIEVED'
export const SUBMISSIONS_RETRIEVED = 'SUBMISSIONS_RETRIEVED'
export const HAS_COURSEWORKS = 'HAS_COURSEWORKS'
export const GLOBAL_POINTS_CALCULATED = 'GLOBAL_POINTS_CALCULATED'


export const hasLogged = (response) => {
  return {
    type: HAS_LOGGED,
    payload: response
  }
}

export const coursesRetrieved = (response) => {
  return {
    type: COURSES_RETRIEVED,
    payload: response
  }
}

export const courseSelected = (courseId) => {
  return {
    type: COURSE_SELECTED,
    payload: courseId
  }
}

export const courseworksRetrieved = (response) => {
  return {
    type: COURSEWORKS_RETRIEVED,
    payload: response
  }
}

export const submissionsRetrieved = (response) => {
  return {
    type: SUBMISSIONS_RETRIEVED,
    payload: response
  }
}

export const globalPointsCalculated = (points) => {
  return {
    type: GLOBAL_POINTS_CALCULATED,
    payload: points
  }
}
