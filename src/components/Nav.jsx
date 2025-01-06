import { NavLink } from 'react-router-dom'
import navCSS from './Nav.module.css'
import { compose } from 'redux'
import { connect } from 'react-redux'

const Nav = (props) => {
	
	return (
		<nav className={`${navCSS.nav}`} >
			<ul className={navCSS.ulNav}>
				<li>
					<NavLink
						to='/listProducts'
						className={props.isActive ? navCSS.activeItemNav : ''}
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
				<li>
					<NavLink
						to='/users'
						className={props => (props.isActive ? navCSS.activeItemNav : '')}
					>
						Пользователи
					</NavLink>
				</li>
				<li>
					<NavLink
						to={`/profile/${props.authId}`}
						className={props => (props.isActive ? navCSS.activeItemNav : '')}
					>
						Профиль
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}

const mapStateToProps = (state) =>{
    return {
        authId: state.AuthPage.id
    }
}

export default compose(connect(mapStateToProps))(Nav)
