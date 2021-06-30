import { combineReducers } from "redux"
import * as constants from "./constant"
import {reducer as matchlistReducer} from "../views/matchlist/store"
const appdefaultReducer = {
  token:sessionStorage.getItem('token') || '',
  sportArr:{}
}
const appReducer = (state=appdefaultReducer,action)=>{
  switch(action.type){
    case constants.SET_TOKEN:
      return Object.assign({
        ...state,
        token:action.token
      })
    case constants.GET_SPORT:
      return Object.assign({
        ...state,
        sportArr:action.sportArr
      })
    default :
      return state
  }
}
export default combineReducers({
  app:appReducer,
  matchlist:matchlistReducer
})
