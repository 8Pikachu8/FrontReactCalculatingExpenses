import React from 'react'
import BlockUpdate from './ItemsUpdate/BlockUpdate/BlockUpdate'
import BlockButtons from './ItemsUpdate/BlockButtons/BlockButtons'
import BlockList from '../ListProductsFolder/BlocksElemets/BlockList'
import  UpdateProductCSS  from './UpdateProducts.module.css'
import {AddProductActionCreator,
	UpdateProductActionCreator,
	UpdatePriceActionCreator,
	UpdateDateActionCreator,
	UpdateCountActionCreator,
	UpdateShopActionCreator,
	UpdateTypeActionCreator,
	
} from '../../../redux/UpdPageCreateActions'

const UpdateProducts = (props) => {

	const inputTypeRef = React.useRef() // Создаем реф для input
	const InputMagazinRef = React.useRef()
	const InputDateRef = React.useRef()
	const InputProductNameRef = React.useRef()
	const InputPriceRef = React.useRef()
	const InputCountRef = React.useRef()

	const handleInsert = () => {
		if (inputTypeRef.current) {
			props.dispatch(
				AddProductActionCreator()
			)
		}
	}

	const onChangeProductNameVlaue = () => {
		let text = InputProductNameRef.current.value
		props.dispatch(UpdateProductActionCreator(text))
		console.log(text)
	}

	const onChangePriceVlaue = () => {
		let text = InputPriceRef.current.value
		props.dispatch(UpdatePriceActionCreator(text))
		console.log(text)
	}
 
	const onChangeDateVlaue = () => {
		let text = InputDateRef.current.value
		props.dispatch(UpdateDateActionCreator(text))
		console.log(text)
	}

	const onChangeCountVlaue = () => {
		let text = InputCountRef.current.value
		props.dispatch(UpdateCountActionCreator(text))
		console.log(text)
	}

	const onChangeMagazinVlaue = () => {
		let text = InputMagazinRef.current.value
		props.dispatch(UpdateShopActionCreator(text))
		console.log(text)
	}

	const onChangeTypeVlaue = () => {
		let text = inputTypeRef.current.value
		props.dispatch(UpdateTypeActionCreator(text))
		console.log(text)
	}

	let newFunctions = [
		onChangeProductNameVlaue,
		onChangeDateVlaue,
		onChangeCountVlaue,
		onChangeMagazinVlaue,
		onChangeTypeVlaue,
		onChangePriceVlaue,
	]
	return (
		<div className={UpdateProductCSS.updateProducts} onClick={props.toggleNavVisibility }>
			<BlockUpdate
				inputTypeRef={inputTypeRef}
				InputMagazinRef={InputMagazinRef}
				InputDateRef={InputDateRef}
				InputProductNameRef={InputProductNameRef}
				InputPriceRef={InputPriceRef}
				InputCountRef={InputCountRef}
				NewValues={props.store.getState().UpdateProductPage.newValue}
				FNewChang={newFunctions}
			/>
			<BlockButtons onInsert={handleInsert} />
			<BlockList ProductList={props.store.getState().UpdateProductPage.ProductList} />
		</div>
	)
}

export default UpdateProducts
