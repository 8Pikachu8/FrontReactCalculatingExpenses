import React from "react";
import usersCSS from "./Users.module.css";
import User from "./user/User";
import axios from 'axios';

class Users extends React.Component{
	
 	fun = () => {
		axios.get("https://social-network.samuraijs.com/api/1.0/users")
		.then(response => { this.props.CallBackSetUsers(response.data.items)})
	
	}

	tasks = () =>{
		const test = 
		this.props.users.map(user => (
		 	<User CallBackFollow = {this.props.CallBackFollow} CallBackUnFollow = {this.props.CallBackUnFollow} user = {user}/>
		));
		return test
}

	render(){
		console.log("Users called", this.props.users);
		return	<div>
			<div className={usersCSS.users} >
				<div className={usersCSS.usersMaped}>
					{this.tasks()}
				</div>
				
			</div>
			<div className={usersCSS.buttonDiv}>
				<button  onClick={this.fun} className={usersCSS.button}>Загрузить еще</button>
				</div>
		</div>
	}
}

export default Users;