import React from 'react'
import UpdateProductsCSS from './UpdateProducts.module.css'
import Insert from './ItemsUpdate/Insert'
import BlockUpdate from './ItemsUpdate/BlockUpdate'
import BlockButtons from './ItemsUpdate/BlockButtons'

const UpdateProducts = () => {
	return (
		<div >
                <BlockUpdate/>
                <BlockButtons/>
		</div>
	)
}

export default UpdateProducts
