import * as contants from './contants'

const defaultState = {
  user:'123'
}

const reducer = (state = defaultState,action) =>{
  if(action.type === contants.CHANGEUSER){
    let newData = state.user
    newData = action.data
    console.log(newData)
    return{
      user:newData
    }
  }
  
  return state
}

export default reducer