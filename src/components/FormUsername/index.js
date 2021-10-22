import { connect } from 'react-redux'
import { mapDispatchToProps } from './mapDispatchToProps'

const FormUsername = ({ typingAction }) => {
  return (
    <form>
      <input
        onChange={(e) => typingAction(e.target.value)}
        type='text'
        name='username'
        placeholder='type your username'
      />
    </form>
  )
}

export default connect(null, mapDispatchToProps)(FormUsername)
