import INITIAL_STATE from '../INITIAL_STATE'
import TYPE from '../TYPE'

export function starWarsReducer(state = INITIAL_STATE, action) {
	const newState = { ...state }
	const { type, payload } = action
	switch (type) {
		case TYPE.START_WARS_PERSONAGE_REQUEST_DATA:
			newState.starWarsPersonage.name = payload.name
			newState.starWarsPersonage.eyeColor = payload.eyeColor
			break
		default:
			break
	}
	return newState
}
