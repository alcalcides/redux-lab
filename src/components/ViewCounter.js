import { connect } from 'react-redux'

const ViewCounter = ({ accumulator }) => {
  return <span>Acumulador: {accumulator}</span>
}

export default connect((state) => ({ accumulator: state.accumulator }))(
  ViewCounter
)
