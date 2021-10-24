import TYPE from "../TYPE"

export function incrementCounter() {
  return {
    type: TYPE.COUNTER_INCREMENT,
    payload: {
      step: 1
    }
  }
}

export function decrementCounter() {
  return {
    type: TYPE.COUNTER_DECREMENT,
    payload: {
      step: 1
    }
  }
}
