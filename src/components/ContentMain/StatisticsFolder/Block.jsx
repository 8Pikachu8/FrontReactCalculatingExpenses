import './Block.css'

const Block = (props) => {
	return (
		<div className='block'>
			<div className='block-price'>{props.Type}</div>
			<div className='block-price'>{props.Price}</div>
		</div>
	)
}

export default Block
