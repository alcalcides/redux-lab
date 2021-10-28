import TYPE from "../TYPE"

export function trackUsernameTypingAction(username) {
  return {
    type: TYPE.USERNAME_TRACK_TYPING,
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
