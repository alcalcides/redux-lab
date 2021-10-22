import { combineReducers } from 'redux'
import { counterReducer } from './counterReducer'

const reducersList = {
  counterReducer
}

export default combineReducers(reducersList)
