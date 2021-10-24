import INITIAL_STATE from '../INITIAL_STATE'
import TYPE from '../TYPE'

export function counterReducer(state = INITIAL_STATE, action) {
	const newState = { ...state } // not mutation!
	switch (action.type) {
		case TYPE.COUNTER_INCREMENT:
			newState.counter = newState.counter + action.payload.step
			break
		case TYPE.COUNTER_DECREMENT:
			newState.counter = newState.counter - action.payload.step
			break
		default:
			break
	}
	return newState
}
