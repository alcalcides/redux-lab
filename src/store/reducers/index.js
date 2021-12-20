import { combineReducers } from 'redux'

import { counterReducer } from './counterSlice'
import { usernameReducer } from './usernameSlice'

const reducersList = {
	counterReducer,
	usernameReducer
}

const rootReducer = combineReducers(reducersList)

export default rootReducer
