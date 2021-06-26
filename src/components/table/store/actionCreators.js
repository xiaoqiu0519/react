import * as contants from './contants' 

export const changeuser = (data)=> {
  return{
    type:contants.CHANGEUSER,
    data
  }
}