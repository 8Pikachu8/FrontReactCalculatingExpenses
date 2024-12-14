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
	
} from '../../../redux/UpdateProduct/UpdPageCreateActions'

const UpdateProducts = (props) => {


	const handleInsert = () => {
		debugger
			props.dispatch(
				AddProductActionCreator()
			)
	
	}

	const onChangeProductNameVlaue = (event) => {
		let text = event.target.value
		props.dispatch(UpdateProductActionCreator(text))
		console.log(text)
	}

	const onChangePriceVlaue = (event) => {
		let text = event.target.value
		props.dispatch(UpdatePriceActionCreator(text))
		console.log(text)
	}
 
	const onChangeDateVlaue = (event) => {
		let text = event.target.value
		props.dispatch(UpdateDateActionCreator(text))
		console.log(text)
	}

	const onChangeCountVlaue = (event) => {
		let text = event.target.value
		props.dispatch(UpdateCountActionCreator(text))
		console.log(text)
	}

	const onChangeMagazinVlaue = (event) => {
		let text = event.target.value
		props.dispatch(UpdateShopActionCreator(text))
		console.log(text)
	}

	const onChangeTypeVlaue = (event) => {
		let text = event.target.value
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
	debugger
	return (
		<div className={UpdateProductCSS.updateProducts} onClick={props.toggleNavVisibility }>
			<BlockUpdate
				NewValues={props.store.newValue}
				FNewChang={newFunctions}
			/>
			<BlockButtons onInsert={handleInsert} />
			<BlockList ProductList={props.store.ProductList} />
		</div>
	)
}

export default UpdateProducts
