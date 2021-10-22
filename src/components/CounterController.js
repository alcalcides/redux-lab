import { connect } from 'react-redux'

const CounterController = ({ dispatch }) => {
  function increment() {
    console.log('increasing...')
    return {
      type: 'COUNTER/INCREMENT',
      payload: {
        step: 1
      }
    }
  }

  function decrement() {
    console.log('decreasing...')
    return {
      type: 'COUNTER/DECREMENT',
      payload: {
        step: 1
      }
    }
  }

  return (
    <div>
      <p>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </p>
    </div>
  )
}

export default connect()(CounterController)
