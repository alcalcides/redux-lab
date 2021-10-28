import { bindActionCreators } from 'redux'
import * as UsernameActions from '../../store/actions/usernameActions'

export const mapDispatchToProps = dispatch =>
	bindActionCreators(UsernameActions, dispatch)
