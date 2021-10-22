import { createStore } from 'redux'

function reducer() {
  console.log('reducer running...')

  let initialState = {
    username: '',
    counter: 0,
  }

  return initialState
}

let store = createStore(reducer)

export default store
