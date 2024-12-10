import blockCSS from './BlockList.module.css'
import Product from './Product/Product'

const BlockList = props => {
	
	return (
		<div className='block'>
			{props.ProductList.map(product => (
				<Product Type={product.Type} Price={product.Price} />
			))}
		</div>
	)
}

export default BlockList
