import { Provider } from 'react-redux'

import './App.css'

import Counter from './components/Counter'
import Dashboard from './components/Dashboard'
import Form from './components/Form'
import store from './store'

export default function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <h1>Teste redux</h1>
        <Counter />
        <Form />
        <Dashboard />
      </Provider>
    </div>
  )
}
