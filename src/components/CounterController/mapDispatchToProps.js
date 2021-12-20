import { bindActionCreators } from 'redux'
import * as CounterActions from '../../store/actions/counterActions'
import { requestStartWarsPersonage } from '../../store/actions/starWarsActions'

export const mapDispatchToProps = dispatch => ({
	...bindActionCreators(CounterActions, dispatch),
	requestStartWarsPersonage: () => dispatch(requestStartWarsPersonage())
})
