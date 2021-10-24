import INITIAL_STATE from './INITIAL_STATE'

export function usernameReducer(state = INITIAL_STATE, action) {
	const newState = { ...state } // not mutation!
	switch (action.type) {
		case 'USERNAME/TYPING':
			newState.username = action.payload.username
			break
		case 'USERNAME/LOST_FOCUS':
			newState.username = action.payload.username
			break
		default:
			break
	}
	return newState
}
