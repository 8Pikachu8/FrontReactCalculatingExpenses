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
			props.addProduct(
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
		props.UpdateFunct.find(func => func.name === 'UpdateProduct')(text)
		console.log(text)
	}

	const onChangePriceVlaue = () => {
		let text = InputPriceRef.current.value
		props.UpdateFunct.find(func => func.name === 'UpdatePrice')(text)
		console.log(text)
	}

	const onChangeDateVlaue = () => {
		let text = InputDateRef.current.value
		props.UpdateFunct.find(func => func.name === 'UpdateDate')(text)
		console.log(text)
	}

	const onChangeCountVlaue = () => {
		let text = InputCountRef.current.value
		props.UpdateFunct.find(func => func.name === 'UpdateCount')(text)
		console.log(text)
	}

	const onChangeMagazinVlaue = () => {
		let text = InputMagazinRef.current.value
		props.UpdateFunct.find(func => func.name === 'UpdateShop')(text)
		console.log(text)
	}

	const onChangeTypeVlaue = () => {
		debugger;
		let text = inputTypeRef.current.value
		let fin = props.UpdateFunct.find(func => func.name === 'UpdateType')
		fin(text)
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
				NewValues={props.ProductListPage.newValue}
				FNewChang={newFunctions}
			/>
			<BlockButtons onInsert={handleInsert} />
			<BlockList ProductList={props.ProductListPage.ProductList} />
		</div>
	)
}

export default UpdateProducts
