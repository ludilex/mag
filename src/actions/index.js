export const SUMA_VALOR = 'SUMA_VALOR'
export const RESTA_VALOR = 'RESTA_VALOR'
export const HAS_LOGGED = 'HAS_LOGGED'



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
