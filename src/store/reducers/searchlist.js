import * as constants from '../constant'

const defaultState = {
  matchId:'',
  matchQueryType:1,
  sportId:''
}
const reducers = (state=defaultState,action)=>{
  switch(action.type){
    case constants.CHANGE_INPUT:
      return Object.assign({
        ...state,
        matchId:action.data
      })
    case constants.HANDLE_CHANGE:
      return Object.assign({
        ...state,
        sportId:action.data
      })
    case constants.HANDLE_RADIO_CHANGE:
      return Object.assign({
        ...state,
        matchQueryType:action.data
      })
    default :
      return state
  }
}
export default reducers