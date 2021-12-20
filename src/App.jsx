import './App.css'
import CounterController from './components/CounterController'
import Dashboard from './components/Dashboard'
import FormUsername from './components/FormUsername'

export default function App() {
	return (
		<div className='App'>
			<h1>Teste redux</h1>
			<CounterController />
			<FormUsername />
			<Dashboard />
		</div>
	)
}
