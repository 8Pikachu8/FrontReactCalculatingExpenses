import headerCSS from './Header.module.css'

const Header = ({toggleNavVisibility}) => {
	return (
		<header className={headerCSS.header}>
			<div className={headerCSS.headerUlList}>
				
				<ul className={headerCSS.ulHeader}>
					<li>
						<button className = {headerCSS.ulButton} onClick={toggleNavVisibility}>=</button>
					</li>
					<li>
						<a href='#'>Яблоко</a>
					</li>
					<li>
						<a href='#'>Персик</a>
					</li>
					<li>
						<a href='#'>Помидор</a>
					</li>
					<li>
						<a href='#'>Огурец</a>
					</li>
				</ul>
			</div>
		</header>
	)
}


export default Header