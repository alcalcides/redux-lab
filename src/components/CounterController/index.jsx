import { connect } from 'react-redux'
import { mapDispatchToProps } from './mapDispatchToProps'

const CounterController = ({ incrementCounter, decrementCounter }) => {
  return (
    <div>
      <p>
        <button onClick={incrementCounter}>+</button>
        <button onClick={decrementCounter}>-</button>
      </p>
    </div>
  )
}

export default connect(null, mapDispatchToProps)(CounterController)
