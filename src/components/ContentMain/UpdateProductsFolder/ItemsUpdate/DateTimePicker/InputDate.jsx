import React from 'react'
import InputDateCSS from './InputDate.module.css'

const InputDate = ({ inputRef, lableinput, newValue, FNewChang }) => {
	
	return (
		<div>
			<label>{lableinput}</label>
			<input
				onChange={FNewChang}
				className={InputDateCSS.insert}
				type='date'
				ref={inputRef}
				value={newValue}
			></input>
		</div>
	)
}

export default InputDate
