import { Provider } from 'react-redux'

import './App.css'
import CounterController from './components/CounterController'
import Dashboard from './components/Dashboard'
import FormUsername from './components/FormUsername'
import store from './store'

export default function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <h1>Teste redux</h1>
        <CounterController />
        <FormUsername />
        <Dashboard />
      </Provider>
    </div>
  )
}
