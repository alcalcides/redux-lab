export function typing(username) {
  return {
    type: 'USERNAME/TYPING',
    payload: {
      username
    }
  }
}

export function loseFocus() {
  return {
    type: 'USERNAME/LOST_FOCUS'
  }
}
