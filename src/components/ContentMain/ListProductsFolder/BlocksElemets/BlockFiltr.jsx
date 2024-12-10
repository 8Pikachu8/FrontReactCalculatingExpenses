import { NavLink } from 'react-router-dom'
import blockCSS from './BlockFiltr.module.css'
import FiltrNavLink from './FiltrElements/FiltrNavLink'

const BlockFiltr = props => {

	let filtr = props.ListFiltrs.map(button => (
		<FiltrNavLink NameElement={button.NameElement} Id={button.Id} />
	));
	
	return (
		<div className='block'>
			<div className={blockCSS.divBlockFiltr}>{filtr}</div>
		</div>
	)
}

export default BlockFiltr
