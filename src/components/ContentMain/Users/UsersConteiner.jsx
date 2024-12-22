import {follow, unfollow, setUsers, SetCurrentPage,SetTotalUsersCount,ToggleIsFetching, ToggleIsFetchingLoader} from './../../../redux/Users/UsersAC'
import Users from "./Users";
import { connect } from "react-redux";
import React from "react";
import usersCSS from "./Users.module.css";
import {UserAPI } from '../../../api/api';


class UsersConteiner extends React.Component {
    constructor(props) {
        super(props);
        this.countLoad = 0;
    }

    componentDidMount() {
        
        this.props.ToggleIsFetching(true)
        UserAPI.GetUsersDefault(this.props.currentPage).then(response => {
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
        this.props.ToggleIsFetchingLoader(false)
        UserAPI.GetUsersPreloadingOnePage(this.props.currentPage, this.props.countLoad).then(response => {
            this.props.setUsers(response.data.items);
            this.props.ToggleIsFetchingLoader(true)
        });
    };

    setPage = (val) => {
        
        this.props.ToggleIsFetching(true)
        UserAPI.GetUsersDefault(val).then(response => {
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
                                isFetchingLoader = {this.props.isFetchingLoader}
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
        isFetching: state.UsersPage.isFetching,
        isFetchingLoader: state.UsersPage.isFetchingLoader,
    }
}


const ConteinerDT = connect(mapStateToProps, {
        follow,
        unfollow,
        setUsers,
        SetCurrentPage,
        SetTotalUsersCount,
        ToggleIsFetching,
        ToggleIsFetchingLoader
    })(UsersConteiner)

export default ConteinerDT;