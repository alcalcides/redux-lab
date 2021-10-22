export function typing(value) {
  return {
    type: 'USERNAME/TYPING',
    payload: {
      value
    }
  }
}

export function loseFocus() {
  return {
    type: 'USERNAME/LOST_FOCUS'
  }
}
