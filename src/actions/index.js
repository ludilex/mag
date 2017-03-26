export const HAS_LOGGED = 'HAS_LOGGED'
export const GOT_ACCESS_TOKEN = 'GOT_ACCESS_TOKEN'
export const API_SUCCESFUL_RESPONSE = 'API_SUCCESFUL_RESPONSE'
export const COURSE_SELECTED = 'COURSE_SELECTED'
export const COURSEWORKS_RETRIEVED = 'COURSEWORKS_RETRIEVED'


export const hasLogged = (response) => {
  return {
    type: HAS_LOGGED,
    payload: response
  }
}

export const apiSuccesfulResponse = (response) => {
  return {
    type: API_SUCCESFUL_RESPONSE,
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
