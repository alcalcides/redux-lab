export const mapStateToProps = state => {
	return { counter: state.counterReducer.counter }
}
