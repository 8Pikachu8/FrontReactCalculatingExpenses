import React from 'react'
import {AddProductActionCreator,
	UpdateProductActionCreator,
	UpdatePriceActionCreator,
	UpdateDateActionCreator,
	UpdateCountActionCreator,
	UpdateShopActionCreator,
	UpdateTypeActionCreator,
	
} from '../../../redux/UpdateProduct/UpdPageCreateActions'
import UpdateProducts from './UpdateProducts'

const ConteinerUP = (props) => {

	const handleInsert = () => {
		props.dispatch(AddProductActionCreator())
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
	return (
		<UpdateProducts store = {props.store} newFunctions = {newFunctions} handleInsert={handleInsert} toggleNavVisibility = {props.toggleNavVisibility}/>
	)
}

export default ConteinerUP
