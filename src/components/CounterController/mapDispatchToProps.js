import {
  decrementCounter,
  incrementCounter
} from '../../store/actions/counterActions';

export const mapDispatchToProps = (dispatch) => ({
  incrementCounterAction: () => dispatch(incrementCounter()),
  decrementCounterAction: () => dispatch(decrementCounter())
});
