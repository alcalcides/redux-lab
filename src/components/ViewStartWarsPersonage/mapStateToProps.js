export const mapStateToProps = state => {
	return {
		counter: state.counterReducer.counter,
		name: state.starWarsReducer.starWarsPersonage.name,
		eyeColor: state.starWarsReducer.starWarsPersonage.eyeColor
	}
}
