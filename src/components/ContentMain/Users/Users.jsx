import React from "react";
import usersCSS from "./Users.module.css";
import User from "./user/User";
import axios from 'axios';

const Users = (props) => {
	console.log("Users called", props.users);
	
	const fun = () => {
		axios.get("https://social-network.samuraijs.com/api/1.0/users")
		.then(response => { props.CallBackSetUsers(response.data.items)})
	
	}

	let tasks = props.users.map(user => (
		 <User CallBackFollow = {props.CallBackFollow} CallBackUnFollow = {props.CallBackUnFollow} user = {user}/>
	));
    return (
		<div>
			<div className={usersCSS.users} >
				<div className={usersCSS.usersMaped}>
					{tasks}
				</div>
				
			</div>
			<div className={usersCSS.buttonDiv}>
				<button  onClick={fun} className={usersCSS.button}>Загрузить еще</button>
				</div>
		</div>
			
		)
}

export default Users;