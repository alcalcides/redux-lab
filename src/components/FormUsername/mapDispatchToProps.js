import { typing } from '../../store/actions/usernameActions'

export const mapDispatchToProps = (dispatch) => ({
  typingAction: (username) => dispatch(typing(username))
})
