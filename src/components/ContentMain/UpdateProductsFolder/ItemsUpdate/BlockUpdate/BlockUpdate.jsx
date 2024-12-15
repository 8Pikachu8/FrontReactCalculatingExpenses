import React from 'react'
import BlockUpdateCSS from './BlockUpdate.module.css'
import Insert from '../Insert/Insert'
import InputDate from '../DateTimePicker/InputDate'


const BlockUpdate = ({
	NewValues,
	onChangeProductNameVlaue,
	onChangePriceVlaue,
	onChangeDateVlaue,
	onChangeCountVlaue,
	onChangeMagazinVlaue,
	onChangeTypeVlaue,
}) => {
	return (
		
		<div className='block'>
			<Insert
				lableinput='Тип продукта '
				newValue={NewValues.Type}
				FNewChang={onChangeTypeVlaue}
			/>
			<Insert
				lableinput='Магазин '
				newValue={NewValues.Shop}
				FNewChang={onChangeMagazinVlaue}
			/>
			<Insert
				lableinput='Название продукта '
				newValue={NewValues.Product}
				FNewChang={onChangeProductNameVlaue}
			/>
			<Insert
				lableinput='Цена '
				newValue={NewValues.Price}
				FNewChang={onChangePriceVlaue}
			/>
			<Insert
				lableinput='Количество '
				newValue={NewValues.Count}
				FNewChang={onChangeCountVlaue}
			/>
			<InputDate
				lableinput='Дата покупки '
				newValue={NewValues.Date}
				FNewChang={onChangeDateVlaue}
			/>
		</div>
	)
}

export default BlockUpdate
