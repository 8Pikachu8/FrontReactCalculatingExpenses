import React from 'react'
import BlockUpdateCSS from './BlockUpdate.module.css'
import Insert from './Insert'
import Button from './Button'

const BlockUpdate = () => {
	return (
		<div className='block'>
			<div className={BlockUpdateCSS.listButton}>
				<Button nameButton='Вставить' />
				<Button nameButton='Обновить' />
			</div>
		</div>
	)
}

export default BlockUpdate
