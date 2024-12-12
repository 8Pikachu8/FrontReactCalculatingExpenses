import { NavLink } from 'react-router-dom'
import navCSS from './Nav.module.css'

const Nav = () => {
	return (
		<nav className={navCSS.nav}>
			<ul className={navCSS.ulNav}>
				<li>
					<NavLink
						to='/listProducts'
						className={props => (props.isActive ? navCSS.activeItemNav : '')}
					>
						Список трат
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/updateProducts'
						className={props => (props.isActive ? navCSS.activeItemNav : '')}
					>
						Редактировать
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/staticstics'
						className={props => (props.isActive ? navCSS.activeItemNav : '')}
					>
						Статистика
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/dailyTasks'
						className={props => (props.isActive ? navCSS.activeItemNav : '')}
					>
						Заметки
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default Nav
