import blockCSS from './BlockList.module.css'
import Product from './Product/Product'

const BlockList = props => {
	
	let product = props.ProductList.map(product => (
		<Product
			Type={product.Type}
			Price={product.Price}
			Product={product.Product}
			Date={product.Date}
			Count={product.Count}
			Shop={product.Shop}
		/>
	))

	return <div className='block'>{product}</div>
}

export default BlockList
