import { NavLink } from 'react-router-dom'
import headerCSS from './Header.module.css'

const Header = (props) => {
	return (
		<header className={headerCSS.header}>
			<div className={headerCSS.headerUlList}>
				
				<ul className={headerCSS.ulHeader}>
					<li>
						<button className = {headerCSS.ulButton} onClick={props.toggleNavVisibility}>=</button>
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
					
					<div className={headerCSS.login}><NavLink to='/auth'>{props.data.login}</NavLink></div>
					
				</ul>
			</div>
			
		</header>
	)
}


export default Header