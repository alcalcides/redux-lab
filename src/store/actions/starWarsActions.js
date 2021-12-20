import TYPE from '../TYPE'
import { doGetRequest } from '../../services/doGetResquest'

export async function requestStartWarsPersonage(id) {
	const API_URL = 'https://swapi.py4e.com/api/'
	const response = await doGetRequest(`${API_URL}people/${id}/`)

	return {
		type: TYPE.START_WARS_PERSONAGE_REQUEST_DATA,
		payload: {
			name: response.detail === 'Not found' ? response.detail : response.name,
			eyeColor: response.detail === 'Not found' ? response.detail : response.eye_color
		}
	}
}
