import { connect } from 'react-redux'
import { mapDispatchToProps } from './mapDispatchToProps'

const CounterController = ({ incrementCounterAction, decrementCounterAction }) => {
  return (
    <div>
      <p>
        <button onClick={incrementCounterAction}>+</button>
        <button onClick={decrementCounterAction}>-</button>
      </p>
    </div>
  )
}

export default connect(null, mapDispatchToProps)(CounterController)
