import React from 'react'
import InsertCSS from './Insert.module.css'

const Insert = ({
	lableinput,
	newValue,
	FNewChang 
}) => {
	return (
		<div>
			<label>{lableinput}</label>
			<input
				className={InsertCSS.insert}
				value={newValue}
				onChange={FNewChang}
			></input>
		</div>
	)
}

export default Insert