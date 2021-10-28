import { connect } from 'react-redux'
import { mapDispatchToProps } from './mapDispatchToProps'

const FormUsername = ({ trackUsernameTyping }) => {

  function handleUsernameTyping(e) {
    console.log("logging typing", e.target.value)
    trackUsernameTyping(e.target.value)
  }

  return (
    <form>
      <input
        onChange={handleUsernameTyping}
        type='text'
        name='username'
        placeholder='type your username'
      />
    </form>
  )
}

export default connect(null, mapDispatchToProps)(FormUsername)
