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
import { connect } from 'react-redux'
import { withAuthRedirect } from '../../../hoc/withAuthRedirect'
import { compose } from 'redux'


const mapStateToProps = (state) =>{
	return {
		ProductList: state.UpdateProductPage.ProductList,
		newValue: state.UpdateProductPage.newValue,
	}
}

const mapDispatchToProps = (dispatch) =>{
	return {
		handleInsert: () => {
			dispatch(AddProductActionCreator())
		},
		onChangeProductNameVlaue: (event) => {
			let text = event.target.value
			dispatch(UpdateProductActionCreator(text))
			console.log(text)
		},
		onChangePriceVlaue: (event) => {
			let text = event.target.value
			dispatch(UpdatePriceActionCreator(text))
			console.log(text)
		},
		onChangeDateVlaue: (event) => {
			let text = event.target.value
			dispatch(UpdateDateActionCreator(text))
			console.log(text)
		},
		onChangeCountVlaue: (event) => {
			let text = event.target.value
			dispatch(UpdateCountActionCreator(text))
			console.log(text)
		},
		onChangeMagazinVlaue: (event) => {
			let text = event.target.value
			dispatch(UpdateShopActionCreator(text))
			console.log(text)
		},
		onChangeTypeVlaue: (event) => {
			let text = event.target.value
			dispatch(UpdateTypeActionCreator(text))
			console.log(text)
		},
		
	}
}


export default compose(connect(mapStateToProps, mapDispatchToProps),withAuthRedirect)(UpdateProducts)