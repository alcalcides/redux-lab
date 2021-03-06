import React from 'react'
import ReactDOM from 'react-dom'
import './theme.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/index'

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
)
