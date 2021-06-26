import * as contents from './contants'
const defaultState = {
  dddd:'121212'
}

const reducer = (state=defaultState,action)=>{
  if(action.type === contents.add){
    console.log(action)
  }
  return state
}
export default reducer