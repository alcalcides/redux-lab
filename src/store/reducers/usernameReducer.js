const USERNAME_INITIAL_STATE = {
  username: '',
  lostFocus: false
}

export function usernameReducer(state = USERNAME_INITIAL_STATE, action) {
  switch (action.type) {
    case 'USERNAME/TYPING':
      return {
        ...state,
        username: action.payload.username
      }
    case 'USERNAME/LOST_FOCUS':
      return {
        ...state,
        lostFocus: true
      }
    default:
      return USERNAME_INITIAL_STATE
  }
}
