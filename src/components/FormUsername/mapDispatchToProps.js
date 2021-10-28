import { trackUsernameTypingAction } from '../../store/actions/usernameActions'

export const mapDispatchToProps = (dispatch) => ({
  trackUsernameTypingAction: (username) => dispatch(trackUsernameTypingAction(username))
})
