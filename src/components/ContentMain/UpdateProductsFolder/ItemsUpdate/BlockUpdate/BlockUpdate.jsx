import React from 'react'
import BlockUpdateCSS from './BlockUpdate.module.css'
import Insert from '../Insert/Insert'
import InputDate from '../DateTimePicker/InputDate'


const BlockUpdate = ({
	inputTypeRef,
	InputMagazinRef,
	InputDateRef,
	InputProductNameRef,
	InputPriceRef,
	InputCountRef,
	NewValues,
	FNewChang
}) => {
	return (
		
		<div className='block'>
			<Insert
				inputRef={inputTypeRef}
				lableinput='Тип продукта '
				newValue={NewValues.Type}
				FNewChang={FNewChang.find(func => func.name === 'onChangeTypeVlaue')}
			/>
			<Insert
				inputRef={InputMagazinRef}
				lableinput='Магазин '
				newValue={NewValues.Shop}
				FNewChang={FNewChang.find(func => func.name === 'onChangeMagazinVlaue')}
			/>
			<Insert
				inputRef={InputProductNameRef}
				lableinput='Название продукта '
				newValue={NewValues.Product}
				FNewChang={FNewChang.find(
					func => func.name === 'onChangeProductNameVlaue'
				)}
			/>
			<Insert
				inputRef={InputPriceRef}
				lableinput='Цена '
				newValue={NewValues.Price}
				FNewChang={FNewChang.find(func => func.name === 'onChangePriceVlaue')}
			/>
			<Insert
				inputRef={InputCountRef}
				lableinput='Количество '
				newValue={NewValues.Count}
				FNewChang={FNewChang.find(func => func.name === 'onChangeCountVlaue')}
			/>
			<InputDate
				inputRef={InputDateRef}
				lableinput='Дата покупки '
				newValue={NewValues.Date}
				FNewChang={FNewChang.find(func => func.name === 'onChangeDateVlaue')}
			/>
		</div>
	)
}

export default BlockUpdate
