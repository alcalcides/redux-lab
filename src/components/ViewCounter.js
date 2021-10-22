import { connect } from 'react-redux'

const ViewCounter = ({ counter }) => {
  return <span>Acumulador: {counter}</span>
}

export default connect((state) => ({ counter: state.counterReducer.counter }))(
  ViewCounter
)
