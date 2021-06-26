import { combineReducers } from "redux"

import {reducer as matchlistReducer} from "../views/matchlist/store"

export default combineReducers({
  matchlist:matchlistReducer
})
