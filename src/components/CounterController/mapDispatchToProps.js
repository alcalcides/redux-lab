import {
  decrementCounter,
  incrementCounter
} from '../../store/actions/counterActions';

export const mapDispatchToProps = (dispatch) => ({
  incrementCounter: () => dispatch(incrementCounter()),
  decrementCounter: () => dispatch(decrementCounter())
});
