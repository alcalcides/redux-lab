import './App.css'

import { Counter } from './components/Counter'
import { Dashboard } from './components/Dashboard'
import { Form } from './components/Form'

export default function App() {
  return (
    <div>
      <h1>Teste redux</h1>
      <Counter />
      <Form />
      <Dashboard />
    </div>
  )
}
