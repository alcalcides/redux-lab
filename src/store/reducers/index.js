import { combineReducers } from 'redux'

import { counterReducer } from './counterSlice'
import { usernameReducer } from './usernameSlice'
import { starWarsReducer } from './starWarsSlice'

const reducersList = {
	counterReducer,
	usernameReducer,
	starWarsReducer
}

const rootReducer = combineReducers(reducersList)

export default rootReducer
