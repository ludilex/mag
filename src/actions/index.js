export const SUMA_VALOR = 'SUMA_VALOR'
export const RESTA_VALOR = 'RESTA_VALOR'
export const HAS_LOGGED = 'HAS_LOGGED'
export const GOT_ACCESS_TOKEN = 'GOT_ACCESS_TOKEN'
export const API_SUCCESFUL_RESPONSE = 'API_SUCCESFUL_RESPONSE'



export const sumaValor = (numero) => {
  return {
    type: SUMA_VALOR,
    payload: numero
  }
}

export const restaValor = (numero) => {
  return {
    type: RESTA_VALOR,
    payload: numero
  }
}

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

export const gotAccessToken = (accessToken) => {
  return {
    type: GOT_ACCESS_TOKEN,
    payload: accessToken
  }
}
