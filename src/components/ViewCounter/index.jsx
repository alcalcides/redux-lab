import { connect } from 'react-redux'
import { mapStateToProps } from './mapStateToProps'

const ViewCounter = ({ counter }) => {
  return <span>Acumulador: {counter}</span>
}

export default connect(mapStateToProps)(ViewCounter)
