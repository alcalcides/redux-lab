export function mapStateToProps() {
	return (state) => ({
		username: state.usernameReducer.username
	})
}
