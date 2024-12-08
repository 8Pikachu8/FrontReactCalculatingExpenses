import navCSS from './Nav.module.css'

const Nav = () => {
	return (
		<nav className={navCSS.nav}>
			<ul className={navCSS.ulNav}>
				<li>
					<a href='#'>Меню</a>
				</li>
				<li>
					<a href='#'>Добавить запись</a>
				</li>
				<li>
					<a href='#'>Статистика</a>
				</li>
				
			</ul>
		</nav>
	)
}

export default Nav
