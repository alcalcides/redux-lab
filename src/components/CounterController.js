const CounterController = () => {
  function increment() {
    console.log('increasing...')
  }

  function decrement() {
    console.log('decreasing...')
  }

  return (
    <div>
      <p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </p>
    </div>
  )
}

export default CounterController
