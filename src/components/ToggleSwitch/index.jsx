import React from 'react'

import './toggleSwitch.css'

export default function ToggleSwitch({ onchange }) {
	return (
		<label className='switch'>
			<input type='checkbox' onChange={onchange}></input>
			<span className='slider'></span>
		</label>
	)
}
