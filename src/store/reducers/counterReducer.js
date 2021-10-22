const COUNTER_INITIAL_STATE = {
  counter: 0
}

export function counterReducer(state = COUNTER_INITIAL_STATE, action) {
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
      return COUNTER_INITIAL_STATE
  }
}
