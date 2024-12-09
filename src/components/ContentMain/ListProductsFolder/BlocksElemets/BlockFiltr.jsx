import blockCSS from './BlockFiltr.module.css'

const BlockFiltr = props => {
	return (
		<div className='block'>
			<div className={blockCSS.blockPrice}>{props.Type}</div>
			<div className={blockCSS.blockPrice}>{props.Price}</div>
		</div>
	)
}

export default BlockFiltr
