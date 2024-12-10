import { NavLink } from 'react-router-dom'
import blockCSS from './BlockFiltr.module.css'
import FiltrNavLink from './FiltrElements/FiltrNavLink'

const BlockFiltr = props => {
	return (
		<div className='block'>
			<div className={blockCSS.divBlockFiltr}>
				{props.ListFiltrs.map(button => (
					<FiltrNavLink NameElement={button.NameElement} Id={button.Id} />
				))}
			</div>
		</div>
	)
}

export default BlockFiltr
