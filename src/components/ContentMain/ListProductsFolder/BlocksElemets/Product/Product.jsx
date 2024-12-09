import productCSS from './Product.module.css'

const Product = props => {
	return (
		<div>
			<div className={productCSS.items}>
				<div >{props.Type}</div>
				<div >{props.Price}</div>
			</div>
			<div className={productCSS.line}></div>
		</div>
	)
}

export default Product
