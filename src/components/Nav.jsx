import navCSS from './Nav.module.css'

const Nav = () => {
	return (
		<nav className={navCSS.nav}>
			<ul className={navCSS.ulNav}>
				<li>
					<a href='/listProducts'>Список трат</a>
				</li>
				<li>
					<a href='/updateProducts'>Редактировать</a>
				</li>
				<li>
					<a href='/staticstics'>Статистика</a>
				</li>
			</ul>
		</nav>
	)
}

export default Nav
