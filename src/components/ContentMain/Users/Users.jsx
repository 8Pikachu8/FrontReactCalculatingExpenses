import React from "react";
import usersCSS from "./Users.module.css";
import User from "./user/User";
import axios from 'axios';
import { retry } from "@reduxjs/toolkit/query";

class Users extends React.Component {
   constructor(props){
	super(props);
	this.pagesDivRef = React.createRef(); // Создаем ref
   }

	componentDidMount(){
		const str = `/api/1.0/users?page=`  + this.props.currentPage
        axios.get(str)
            .then(response => {
                this.props.CallBackSetUsers(response.data.items);
				this.props.CallBackSetTotalUserCount(response.data.totalCount);
            });
	}

	componentWillUnmount() {
		
    	this.setState({ localUsers: [] }); // Очищаем локальных пользователей
        this.props.CallBackSetUsers([]); // Сброс глобального состояния пользователей
        this.props.CallBackSetTotalUserCount(0); // Сброс общего количества пользователей
	}

    fetchUsers = () => {
		debugger
        // Повторная загрузка данных пользователей
		this.props.currentPage = this.props.currentPage + 1
		const str = `/api/1.0/users?page=${this.props.currentPage}&count=${10}` 
        axios.get(str)
            .then(response => {
                this.props.CallBackSetUsers(response.data.items);
            });
    };

	setPage(val){
		debugger
		const str = `/api/1.0/users?page=${val}&count=${10}` 
        axios.get(str)
            .then(response => {
				this.props.CallBackSetPage(val, response.data.items);
            });
		
	}

	setCountUsers(val){
		debugger
		const str = `/api/1.0/users?page=${val}&count=${10}` 
        axios.get(str)
            .then(response => {
				this.props.CallBackSetTotalUserCount(response.data.totalCount);
            });
		
	}
	
	renderUsers = () => {
		console.log("mapStateToProps called", this.props.users);
        return this.props.users.map(user => (
            <User 
                key={user.id} 
                CallBackFollow={this.props.CallBackFollow} 
                CallBackUnFollow={this.props.CallBackUnFollow} 
                user={user} 
            />
        ));
    };

	renderItemsPages = () =>{
		let listUsers = []
		
		for(let i= 1; i <= Math.ceil(this.props.countUsers/10) ;i++){
			listUsers.push(i)
		}
		
		const res = (listUsers) =>{
			return listUsers.map(val => <div onClick={()=> { this.setPage(val)}} className={this.props.currentPage === val? usersCSS.ItemPagesSelected : usersCSS.ItemPages }>{val}</div>)
		}
		
		const arr = res(listUsers)

		if (arr.length <= 10) {
        // Если массив меньше или равен 10 элементам, вернуть его полностью
        	return arr;
    	}
		const firstFive = arr.slice(0, 5); // Первые 5 элементов
		const lastFive = arr.slice(-5);   // Последние 5 элементов
		return [...firstFive, ...lastFive]; // Объединить первые и последние

	}

    render() {
        console.log("Users called", this.props.users);
		
        return (
            <div>
				<div className={usersCSS.ListPages}>
                    {this.renderItemsPages()}
                </div>
                <div  className={usersCSS.users}>
                    <div  ref={this.pagesDivRef}  className={usersCSS.usersMaped}>
                        {this.renderUsers()}
                    </div>
                </div>
                <div className={usersCSS.buttonDiv}>
                    <button onClick={this.fetchUsers} className={usersCSS.button}>Загрузить еще</button>
                </div>
            </div>
        );
    }
}

export default Users;
