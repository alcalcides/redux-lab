import { connect } from 'react-redux'
import { mapStateToProps } from './mapStateToProps'

const ViewUsername = ({ username }) => {
	return (
		<p>
			Digitado: <span>{username}</span>
		</p>
	)
}

export default connect(mapStateToProps)(ViewUsername)
