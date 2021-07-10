import { combineReducers } from 'redux'
import * as constants from '../constant'

const appReducersdefault = {
  loading:false,
  token:sessionStorage.getItem('token') || '',
  sportArr:{}
}
const appReducers = (state=appReducersdefault,action)=>{
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
    case constants.CHNAGE_LOADING:
      return Object.assign({
        ...state,
        loading:action.flag
      })
    default :
      return state
  }
}

export default combineReducers({
  app:appReducers
})