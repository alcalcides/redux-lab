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
			<label>Counter:</label>
			<button onClick={handleButtonIncrement}>&#11014;</button>
			<button onClick={handleButtonDecrement}>&#11015;</button>
		</div>
	)
}

export default connect(null, mapDispatchToProps)(CounterController)
