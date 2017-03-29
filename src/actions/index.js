export const HAS_LOGGED = 'HAS_LOGGED'
export const GOT_ACCESS_TOKEN = 'GOT_ACCESS_TOKEN'
export const API_SUCCESFUL_RESPONSE = 'API_SUCCESFUL_RESPONSE'


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
