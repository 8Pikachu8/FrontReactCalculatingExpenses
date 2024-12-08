import './Header.css'

const Header = () => {
	return (
		<header className='header'>
			<img src='image.png' alt='Описание изображения' />
			<div className='header-ulList'>
				<ul className='ul-header'>
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