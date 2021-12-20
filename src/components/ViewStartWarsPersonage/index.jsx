import { connect } from 'react-redux'
import { mapStateToProps } from './mapStateToProps'
import { useEffect, useState } from 'react'
import { doGetRequest } from '../../services/doGetResquest'

const API_URL = 'https://swapi.py4e.com/api/'

const ViewStarWarsPersonage = ({ counter }) => {
	const [person, setPerson] = useState('')
	const [eyeColor, setEyeColor] = useState('')

	useEffect(() => {
		const apiConsult = async () => {
			const response = await doGetRequest(`${API_URL}people/${counter}/`)
			console.log(`response`, response)
			setPerson(response.name)
			setEyeColor(response.eye_color)
		}
		apiConsult()
	})

	return (
		<p>
			{person} has {eyeColor} eyes
		</p>
	)
}

export default connect(mapStateToProps)(ViewStarWarsPersonage)
