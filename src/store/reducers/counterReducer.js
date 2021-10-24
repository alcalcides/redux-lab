import INITIAL_STATE from './INITIAL_STATE'

export function counterReducer(state = INITIAL_STATE, action) {
	const newState = { ...state } // not mutation!
	switch (action.type) {
		case 'COUNTER/INCREMENT':
			newState.counter = newState.counter + action.payload.step
			break
		case 'COUNTER/DECREMENT':
			newState.counter = newState.counter - action.payload.step
			break
		default:
			break
	}
	return newState
}
