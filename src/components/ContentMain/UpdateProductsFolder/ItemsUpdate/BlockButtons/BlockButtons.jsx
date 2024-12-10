import React from 'react'
import BlockButtonsCSS from './BlockButtons.module.css'
import Button from '../Button/Button'

const BlockButtons = ({ onInsert }) => {
	
	return (
		<div className='block'>
			<div className={BlockButtonsCSS.listButton}>
				<Button nameButton='Вставить' onClickHandler={onInsert} />
				<Button nameButton='Обновить' />
			</div>
		</div>
	)
}

export default BlockButtons
