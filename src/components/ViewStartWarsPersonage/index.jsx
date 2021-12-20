import { connect, useDispatch } from 'react-redux'
import { mapStateToProps } from './mapStateToProps'
import { useEffect } from 'react'
import { requestStartWarsPersonage } from './../../store/actions/starWarsActions'

const ViewStarWarsPersonage = ({ counter, name, eyeColor }) => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(requestStartWarsPersonage(counter))
	}, [counter, dispatch])

	return <p>{`${name} has ${eyeColor} eyes`}</p>
}

export default connect(mapStateToProps)(ViewStarWarsPersonage)
