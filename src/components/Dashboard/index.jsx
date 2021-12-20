import ViewUsername from '../ViewUsername'
import ViewCounter from '../ViewCounter'
import ViewStartWarsPersonage from '../ViewStartWarsPersonage'

export default function Dashboard() {
	return (
		<div>
			<h2>Dashboard</h2>
			<ViewUsername />
			<ViewCounter />
			<ViewStartWarsPersonage />
		</div>
	)
}
