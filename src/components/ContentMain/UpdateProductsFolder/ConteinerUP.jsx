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
		},
		onChangePriceVlaue: (event) => {
			let text = event.target.value
			dispatch(UpdatePriceActionCreator(text))
		},
		onChangeDateVlaue: (event) => {
			let text = event.target.value
			dispatch(UpdateDateActionCreator(text))
		},
		onChangeCountVlaue: (event) => {
			let text = event.target.value
			dispatch(UpdateCountActionCreator(text))
		},
		onChangeMagazinVlaue: (event) => {
			let text = event.target.value
			dispatch(UpdateShopActionCreator(text))
		},
		onChangeTypeVlaue: (event) => {
			let text = event.target.value
			dispatch(UpdateTypeActionCreator(text))
		},
		
	}
}


export default compose(connect(mapStateToProps, mapDispatchToProps),withAuthRedirect)(UpdateProducts)