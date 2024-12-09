import blockCSS from './BlockList.module.css'
import Product from './Product/Product'

const BlockList = props => {
	return (
		<div className='block'>
			<Product Type='Продукт' Price='143,6 р.' />
			<Product Type='Продукт' Price='13243,6 р.' />
			<Product Type='Продукт' Price='1143,6 р.' />
			<Product Type='Продукт' Price='4143,6 р.' />
		</div>
	)
}

export default BlockList
