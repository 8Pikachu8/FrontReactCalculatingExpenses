import React from 'react'
import BlockUpdate from './ItemsUpdate/BlockUpdate/BlockUpdate'
import BlockButtons from './ItemsUpdate/BlockButtons/BlockButtons'
import BlockList from '../ListProductsFolder/BlocksElemets/BlockList'
import  UpdateProductCSS  from './UpdateProducts.module.css'


const UpdateProducts = (props) => {
	return (
		<div className={UpdateProductCSS.updateProducts} >
			<BlockUpdate
				NewValues={props.newValue}
				onChangeProductNameVlaue={props.onChangeProductNameVlaue}
				onChangePriceVlaue={props.onChangePriceVlaue}
				onChangeDateVlaue={props.onChangeDateVlaue}
				onChangeCountVlaue={props.onChangeCountVlaue}
				onChangeMagazinVlaue={props.onChangeMagazinVlaue}
				onChangeTypeVlaue={props.onChangeTypeVlaue}
			/>
			<BlockButtons onInsert={props.handleInsert} />
			<BlockList ProductList={props.ProductList} />
		</div>
	)
}



export default UpdateProducts
