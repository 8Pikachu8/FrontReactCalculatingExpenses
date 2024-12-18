import {follow, unfollow, setUsers, SetCurrentPage,SetTotalUsersCount,ToggleIsFetching} from './../../../redux/Users/UsersAC'
import Users from "./Users";
import { connect } from "react-redux";
import axios from "axios";
import React from "react";
import usersCSS from "./Users.module.css";


class UsersConteiner extends React.Component {
    constructor(props) {
        super(props);
        this.countLoad = 0;
    }

    componentDidMount() {
        const str = `/api/1.0/users?page=${this.props.currentPage}`;
        this.props.ToggleIsFetching(true)
        axios.get(str, { headers: {
        "Authorization": "Bearer c53c392f-f277-4151-adf7-e7718d3ad0a7"
    }}).then(response => {
            this.props.setUsers(response.data.items);
            this.props.SetTotalUsersCount(response.data.totalCount);
            this.props.ToggleIsFetching(false)
        });
    }

    componentWillUnmount() {
        this.props.setUsers([]);
        this.props.SetTotalUsersCount(0);
    }

    fetchUsers = () => {
        const str = `/api/1.0/users?page=${this.props.currentPage + this.props.countLoad}&count=10`;
        this.props.ToggleIsFetching(true)
        axios.get(str, { headers: {
        "Authorization": "Bearer c53c392f-f277-4151-adf7-e7718d3ad0a7"
    }}).then(response => {
            this.props.setUsers(response.data.items);
            this.props.ToggleIsFetching(false)
        });
    };

    setPage = (val) => {
        const str = `/api/1.0/users?page=${val}&count=10`;
        this.props.ToggleIsFetching(true)
        axios.get(str, { headers: {
        "Authorization": "Bearer c53c392f-f277-4151-adf7-e7718d3ad0a7"
    }}).then(response => {
            this.props.SetCurrentPage(val, response.data.items);
            this.props.ToggleIsFetching(false)
        });
    };


    renderItemsPages = () => {
        let listUsers = [];
        for (let i = 1; i <= Math.ceil(this.props.countUsers / 10); i++) {
            listUsers.push(i);
        }

        const arr = listUsers.map(val => (
            <div
                key={val}
                onClick={() => this.setPage(val)}
                className={this.props.currentPage === val ? usersCSS.ItemPagesSelected : usersCSS.ItemPages}
            >
                {val}
            </div>
        ));

        if (arr.length <= 10) {
            return arr;
        }

        const firstFive = arr.slice(0, 5);
        const lastFive = arr.slice(-5);
        return [...firstFive, ...lastFive];
    };

    render() {
        return <>
                
                <Users
                                users = {this.props.users}
                                renderItemsPages = {this.renderItemsPages}
                                fetchUsers = {this.fetchUsers}
                                follow = {this.props.follow}
                                unfollow = {this.props.unfollow}
                                isFetching = {this.props.isFetching}
                                ToggleIsFetching = {this.props.ToggleIsFetching}
                    />
            </>
    }
}

const mapStateToProps = (state) =>{
    console.log("mapStateToProps called", state.UsersPage);
    return {
        users: state.UsersPage.users,
        countUsers: state.UsersPage.countUsers,
        currentPage: state.UsersPage.currentPage,
        countLoad: state.UsersPage.countLoad,
        isFetching: state.UsersPage.isFetching

    }
}


const ConteinerDT = connect(mapStateToProps, {
        follow,
        unfollow,
        setUsers,
        SetCurrentPage,
        SetTotalUsersCount,
        ToggleIsFetching
    })(UsersConteiner)

export default ConteinerDT;