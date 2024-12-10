import { NavLink } from 'react-router-dom'
import filtrNavLink from './FiltrNavLink.module.css'

const FiltrNavLink = props => {
	return (
		<div className={filtrNavLink.divFiltrNavLink}>
			<NavLink
				to={'/listProducts/' + props.Id}
				className={filtrNavLink.filtrNavLink}
			>
				{props.NameElement}
			</NavLink>
		</div>
	)
}

export default FiltrNavLink
