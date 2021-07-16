import * as constants from '../constant'
import { findCurrentSports } from '../../api/commom'
export const getSport = ()=>{
  return (dispatch)=>{
    findCurrentSports({
      matchType: 2
    }).then(res=>{
      if(res.code === 0){
        dispatch({
          type:constants.GET_SPORT,
          data:res.data
        })
      }
    })
  }
}
export const setToken = data =>({type:constants.SET_TOKEN,data})
export const changeLoading = data =>({type:constants.CHNAGE_LOADING,data})
