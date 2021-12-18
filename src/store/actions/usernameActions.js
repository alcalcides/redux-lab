import TYPE from "../TYPE"

export function trackUsernameTyping(username) {
  return {
    type: TYPE.USERNAME_TRACK_TYPING,
    payload: {
      username
    }
  }
}
