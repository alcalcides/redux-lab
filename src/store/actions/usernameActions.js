import TYPE from "../TYPE"

export function typing(username) {
  return {
    type: TYPE.USERNAME_TYPING,
    payload: {
      username
    }
  }
}

export function loseFocus() {
  return {
    type: TYPE.USERNAME_LOST_FOCUS
  }
}
