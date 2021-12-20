import { connect } from 'react-redux'
import { mapStateToProps } from './mapStateToProps'

const ViewStarWarsPersonage = ({ name, eyeColor }) => {
	if (name === 'Not found' || name === '') return <p>Try another number</p>
	else return <p>{`${name} has ${eyeColor} eyes`}</p>
}

export default connect(mapStateToProps)(ViewStarWarsPersonage)
