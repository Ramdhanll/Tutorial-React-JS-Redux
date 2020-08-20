import {BUY_CAKE, CREATE_CAKE} from './cakeTypes'

export const buyCake = (number) => {
  return {
    type : BUY_CAKE,
    payload: number
  }
}

export const createCake = () => {
  return {
    type : CREATE_CAKE,
    payload : 2
  }
}