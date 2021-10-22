import { connect } from 'react-redux'
import {
  decrementCounter,
  incrementCounter
} from '../store/actions/counterActions'

const CounterController = ({ dispatch }) => {
  return (
    <div>
      <p>
        <button onClick={() => dispatch(incrementCounter())}>+</button>
        <button onClick={() => dispatch(decrementCounter())}>-</button>
      </p>
    </div>
  )
}

export default connect()(CounterController)
