import { NavLink } from 'react-router-dom'
import headerCSS from './Header.module.css'
import Popup from './PopUp'
import React from 'react'

class Header extends React.Component  {

	state = {
		isPopUpVisible: this.props.isPopUpVisible
	}

	setStateVisibale = () => {
		const isPop = !this.state.isPopUpVisible;
		this.setState({
                isPopUpVisible: isPop
        })
	}

	goToProfile =() =>{
		this.props.handleGoToProfile();
		this.setStateVisibale();
	}


	render() {	
		return (
			<header className={headerCSS.header}>
				<div className={headerCSS.headerUlList}>
					
					<ul className={headerCSS.ulHeader}>
						<li>
							<button className = {headerCSS.ulButton} onClick={this.props.toggleNavVisibility}>=</button>
						</li>
						<li>
							<a href='#'>Привет</a>
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
						
						<div className={headerCSS.login}>{this.props.data.login ==null ? <NavLink to='/auth'>Login</NavLink>:
						<div>
							<button to={'/profile/' + this.props.data.id} onClick={this.setStateVisibale}>{this.props.data.login}</button>
							{this.state.isPopUpVisible?<div style={{ position: "relative" }}> <Popup  onProfileClick={this.goToProfile}
                                onLogoutClick={this.props.handleLogout}/></div>: <div></div>}
						</div>}</div>
						
					</ul>
				</div>
				
			</header>
	)
	}
}


export default Header