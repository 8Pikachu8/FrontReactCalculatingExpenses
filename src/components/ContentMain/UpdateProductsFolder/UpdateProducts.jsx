import React from 'react'
import BlockUpdate from './ItemsUpdate/BlockUpdate/BlockUpdate'
import BlockButtons from './ItemsUpdate/BlockButtons/BlockButtons'
import BlockList from '../ListProductsFolder/BlocksElemets/BlockList'
const UpdateProducts = (props) => {

	const inputTypeRef = React.useRef() // Создаем реф для input
	const InputMagazinRef = React.useRef()
	const InputDateRef = React.useRef()
	const InputProductNameRef = React.useRef()
	const InputPriceRef = React.useRef()
	const InputCountRef = React.useRef()

	const handleInsert = () => {
		debugger;
		if (inputTypeRef.current) {
			props.store.addProduct(
				InputProductNameRef.current.value,
				InputPriceRef.current.value,
				InputDateRef.current.value,
				InputCountRef.current.value,
				InputMagazinRef.current.value,
				inputTypeRef.current.value
			)
		}
	}

	const onChangeProductNameVlaue = () => {
		let text = InputProductNameRef.current.value
		props.store.UpdateProduct(text)
		console.log(text)
	}

	const onChangePriceVlaue = () => {
		let text = InputPriceRef.current.value
		props.store.UpdatePrice(text)
		console.log(text)
	}
 
	const onChangeDateVlaue = () => {
		let text = InputDateRef.current.value
		props.store.UpdateDate(text)
		console.log(text)
	}

	const onChangeCountVlaue = () => {
		let text = InputCountRef.current.value
		props.store.UpdateCount(text)
		console.log(text)
	}

	const onChangeMagazinVlaue = () => {
		let text = InputMagazinRef.current.value
		props.store.UpdateShop(text)
		console.log(text)
	}

	const onChangeTypeVlaue = () => {
		debugger;
		let text = inputTypeRef.current.value
		props.store.UpdateType(text)
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
		<div>
			<BlockUpdate
				inputTypeRef={inputTypeRef}
				InputMagazinRef={InputMagazinRef}
				InputDateRef={InputDateRef}
				InputProductNameRef={InputProductNameRef}
				InputPriceRef={InputPriceRef}
				InputCountRef={InputCountRef}
				NewValues={props.store.GetState().newValue}
				FNewChang={newFunctions}
			/>
			<BlockButtons onInsert={handleInsert} />
			<BlockList ProductList={props.store.GetState().ProductList} />
		</div>
	)
}

export default UpdateProducts
