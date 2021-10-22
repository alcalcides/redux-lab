import { createStore } from 'redux'

const INITIAL_STATE = {
  username: '',
  counter: 0
}

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'COUNTER/INCREMENT':
      return {
        ...state,
        counter: state.counter + action.payload.step
      }
    case 'COUNTER/DECREMENT':
      return {
        ...state,
        counter: state.counter - action.payload.step
      }
    default:
      break
  }

  return INITIAL_STATE
}

let store = createStore(reducer)

export default store
