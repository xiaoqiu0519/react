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
        token:action.data
      })
    case constants.GET_SPORT:
      return Object.assign({
        ...state,
        sportArr:action.data
      })
    case constants.CHNAGE_LOADING:
      return Object.assign({
        ...state,
        loading:action.data
      })
    default :
      return state
  }
}
export default appReducers
