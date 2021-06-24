
import { combineReducers } from 'redux'

import { reducer as TableReducer } from '../components/table/store'

export default combineReducers({
  table:TableReducer
})
