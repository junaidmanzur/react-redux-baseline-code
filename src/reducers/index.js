import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import notesReducer from "./noteReducer"

export default combineReducers({
  routing: routerReducer,
  notesReducer
})