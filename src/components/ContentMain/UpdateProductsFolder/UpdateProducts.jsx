import React from 'react'
import BlockUpdate from './ItemsUpdate/BlockUpdate/BlockUpdate'
import BlockButtons from './ItemsUpdate/BlockButtons/BlockButtons'
import BlockList from '../ListProductsFolder/BlocksElemets/BlockList'
import  UpdateProductCSS  from './UpdateProducts.module.css'


const UpdateProducts = (props) => {
	return (
		<div className={UpdateProductCSS.updateProducts} onClick={props.toggleNavVisibility }>
			<BlockUpdate
				NewValues={props.store.newValue}
				FNewChang={props.newFunctions}
			/>
			<BlockButtons onInsert={props.handleInsert} />
			<BlockList ProductList={props.store.ProductList} />
		</div>
	)
}

export default UpdateProducts
