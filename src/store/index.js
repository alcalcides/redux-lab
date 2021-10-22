import { createStore } from 'redux'

function reducer() {
  let initialState = {
    username: '',
    accumulator: 0,
  }

  return initialState
}

let store = createStore(reducer)

export default store
