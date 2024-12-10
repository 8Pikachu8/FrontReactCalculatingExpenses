import productCSS from './Product.module.css'

const Product = props => {
	
	return (
		<div>
			<div className={productCSS.items}>
				<div>{props.Product}</div>
				<div>{props.Price}</div>
				<div>{props.Date}</div>
				<div>{props.Count}</div>
				<div>{props.Shop}</div>
				<div>{props.Type}</div>
			</div>
			<div className={productCSS.line}></div>
		</div>
	)
}

export default Product
