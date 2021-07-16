import { combineReducers } from 'redux'
import appReducers from './app'
import searchListReducer from './searchlist'

export default combineReducers({
  app:appReducers,
  searchList:searchListReducer
})