import React from 'react'
import BlockButtonsCSS from './BlockButtons.module.css'
import Button from '../Button/Button'

const BlockUpdate = () => {
	return (
		<div className='block'>
			<div className={BlockButtonsCSS.listButton}>
				<Button nameButton='Вставить' />
				<Button nameButton='Обновить' />
			</div>
		</div>
	)
}

export default BlockUpdate
