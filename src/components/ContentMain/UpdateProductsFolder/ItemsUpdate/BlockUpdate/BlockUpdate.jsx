import React from 'react'
import BlockUpdateCSS from './BlockUpdate.module.css'
import Insert from '../Insert/Insert'
import InputDate from '../DateTimePicker/InputDate'


const BlockUpdate = ({
	NewValues,
	FNewChang
}) => {
	return (
		
		<div className='block'>
			<Insert
				lableinput='Тип продукта '
				newValue={NewValues.Type}
				FNewChang={FNewChang.find(func => func.name === 'onChangeTypeVlaue')}
			/>
			<Insert
				lableinput='Магазин '
				newValue={NewValues.Shop}
				FNewChang={FNewChang.find(func => func.name === 'onChangeMagazinVlaue')}
			/>
			<Insert
				lableinput='Название продукта '
				newValue={NewValues.Product}
				FNewChang={FNewChang.find(
					func => func.name === 'onChangeProductNameVlaue'
				)}
			/>
			<Insert
				lableinput='Цена '
				newValue={NewValues.Price}
				FNewChang={FNewChang.find(func => func.name === 'onChangePriceVlaue')}
			/>
			<Insert
				lableinput='Количество '
				newValue={NewValues.Count}
				FNewChang={FNewChang.find(func => func.name === 'onChangeCountVlaue')}
			/>
			<InputDate
				lableinput='Дата покупки '
				newValue={NewValues.Date}
				FNewChang={FNewChang.find(func => func.name === 'onChangeDateVlaue')}
			/>
		</div>
	)
}

export default BlockUpdate
