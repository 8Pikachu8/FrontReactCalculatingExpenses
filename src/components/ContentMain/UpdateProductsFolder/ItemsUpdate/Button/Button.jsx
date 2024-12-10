import React from 'react'
import ButtonCSS from './Button.module.css'

const Button = (props) => {
	return (
		<div>
			<button className={ButtonCSS.button}>{props.nameButton}</button>
		</div>
	)
}

export default Button
