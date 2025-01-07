import React from 'react'
import {AddProductActionCreator,
	
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
		handleInsert: (data) => {
			dispatch(AddProductActionCreator(data))
		}
	}
}


export default compose(connect(mapStateToProps, mapDispatchToProps),withAuthRedirect)(UpdateProducts)