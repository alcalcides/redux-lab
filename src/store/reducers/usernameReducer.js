import INITIAL_STATE from '../INITIAL_STATE'
import TYPE from '../TYPE'

export function usernameReducer(state = INITIAL_STATE, action) {
	const newState = { ...state } // not mutation!
	switch (action.type) {
		case TYPE.USERNAME_TYPING:
			newState.username = action.payload.username
			break
		case TYPE.USERNAME_LOST_FOCUS:
			newState.username = action.payload.username
			break
		default:
			break
	}
	return newState
}
