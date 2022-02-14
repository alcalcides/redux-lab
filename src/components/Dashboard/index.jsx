import ViewUsername from '../ViewUsername'
import ViewCounter from '../ViewCounter'
import ViewStartWarsPersonage from '../ViewStartWarsPersonage'
import ViewEnvironmetVariables from '../ViewEnvironmetVariables'
import ToggleSwitch from './../ToggleSwitch/index';

export default function Dashboard() {
	return (
		<div>
			<h2>Dashboard</h2>
			<ViewUsername />
			<ViewCounter />
			<ViewStartWarsPersonage />
			<ViewEnvironmetVariables />
			<ToggleSwitch />
		</div>
	)
}
