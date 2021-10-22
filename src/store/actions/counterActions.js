export function incrementCounter() {
  return {
    type: 'COUNTER/INCREMENT',
    payload: {
      step: 1
    }
  }
}

export function decrementCounter() {
  return {
    type: 'COUNTER/DECREMENT',
    payload: {
      step: 1
    }
  }
}
