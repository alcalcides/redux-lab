import { combineReducers } from 'redux'
import { counterReducer } from './counterReducer'
import { usernameReducer } from './usernameReducer'

const reducersList = {
  counterReducer,
  usernameReducer
}

export default combineReducers(reducersList)
