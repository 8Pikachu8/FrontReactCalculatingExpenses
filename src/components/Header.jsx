import headerCSS from './Header.module.css'

const Header = () => {
	return (
		<header className={headerCSS.header}>
			<img src='image.png' alt='Описание изображения' />
			<div className={headerCSS.headerUlList}>
				<ul className={headerCSS.ulHeader}>
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