import INITIAL_STATE from '../INITIAL_STATE'
import TYPE from '../TYPE'

export function usernameReducer(state = INITIAL_STATE, action) {
	const newState = { ...state }
	const { type, payload } = action
	switch (type) {
		case TYPE.USERNAME_TRACK_TYPING:
			newState.username = payload.username
			break
		case TYPE.USERNAME_LOST_FOCUS:
			newState.username = payload.username
			break
		default:
			break
	}
	return newState
}
