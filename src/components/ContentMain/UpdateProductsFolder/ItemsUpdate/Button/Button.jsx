import React from 'react'
import ButtonCSS from './Button.module.css'

const Button = ({ nameButton, onClickHandler }) => {
	return (
		<div>
			<button className={ButtonCSS.button} onClick={onClickHandler}>
				{nameButton}
			</button>
		</div>
	)
}

export default Button
