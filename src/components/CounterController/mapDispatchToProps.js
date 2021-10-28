import { bindActionCreators } from 'redux';
import * as CounterActions from '../../store/actions/counterActions';

export const mapDispatchToProps = (dispatch) => bindActionCreators(CounterActions, dispatch)
