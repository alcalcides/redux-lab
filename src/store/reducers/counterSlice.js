import INITIAL_STATE from '../INITIAL_STATE'
import TYPE from '../TYPE'

export function counterReducer(state = INITIAL_STATE, action) {
	const newState = { ...state }
	const { type, payload } = action
	switch (type) {
		case TYPE.COUNTER_INCREMENT:
			newState.counter = newState.counter + payload.step
			break
		case TYPE.COUNTER_DECREMENT:
			newState.counter = newState.counter - payload.step
			break
		default:
			break
	}
	console.log(`newState`, newState)
	return newState
}
