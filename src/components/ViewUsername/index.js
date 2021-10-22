import { connect } from 'react-redux'

const ViewUsername = ({ username }) => {
  return (
    <p>
      Digitado: <span>{username}</span>
    </p>
  )
}

export default connect((state) => ({
  username: state.usernameReducer.username
}))(ViewUsername)
