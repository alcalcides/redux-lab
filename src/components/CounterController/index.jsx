import { connect } from 'react-redux'
import { mapDispatchToProps } from './mapDispatchToProps'

const CounterController = ({ incrementCounter, decrementCounter, requestStartWarsPersonage }) => {
	function handleButtonIncrement() {
		incrementCounter()
		requestStartWarsPersonage()
	}

	function handleButtonDecrement() {
		decrementCounter()
		requestStartWarsPersonage()
	}

	return (
		<div>
			<p>
				<button onClick={handleButtonIncrement}>+</button>
				<button onClick={handleButtonDecrement}>-</button>
			</p>
		</div>
	)
}

export default connect(null, mapDispatchToProps)(CounterController)
