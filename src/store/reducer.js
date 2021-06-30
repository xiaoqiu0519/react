import { combineReducers } from "redux"

import {reducer as matchlistReducer} from "../views/matchlist/store"
const appdefaultReducer = {
  token:sessionStorage.getItem('token') || ''
}
const appReducer = (state=appdefaultReducer,action)=>{
  if(action.type === 'set_token'){
    return{
      token:action.token
    }
  }
  return state
}
export default combineReducers({
  app:appReducer,
  matchlist:matchlistReducer
})
