import {follow, unfollow, setUsers, SetCurrentPage,SetTotalUsersCount,ToggleIsFetching, ToggleIsFetchingLoader, ToggleIsFollowingProgress} from './../../../redux/Users/UsersAC'
import {GetUsersNewPageThunkCreator,GetUsersPreloadingPageThunkCreator} from './../../../redux/Users/Users-reducer'
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
        this.props.GetUsersNewPageThunkCreator(this.props.currentPage);
    }

    componentWillUnmount() {
        this.props.setUsers([]);
        this.props.SetTotalUsersCount(0);
    }

    fetchUsers = () => {
        this.props.GetUsersPreloadingPageThunkCreator(this.props.currentPage, this.props.countLoad);
    };

    renderItemsPages = () => {
        let listPages = [];
        for (let i = 1; i <= Math.ceil(this.props.countUsers / 10); i++) {
            listPages.push(i);
        }

        const arr = listPages.map(val => (
            <div
                key={val}
                onClick={() => this.props.GetUsersNewPageThunkCreator(val)}
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

    setToggleFollowingProgress = (val) =>{
        this.props.ToggleIsFollowingProgress(val)
    }

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
                                setToggleFollowingProgress = {this.setToggleFollowingProgress}
                                toogleIsFollowing = {this.props.toogleIsFollowing}
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
        toogleIsFollowing: state.UsersPage.toogleIsFollowing,
    }
}


const ConteinerDT = connect(mapStateToProps, {
        follow,
        unfollow,
        setUsers,
        SetCurrentPage,
        SetTotalUsersCount,
        ToggleIsFetching,
        ToggleIsFetchingLoader,
        ToggleIsFollowingProgress,
        GetUsersNewPageThunkCreator,
        GetUsersPreloadingPageThunkCreator
    })(UsersConteiner)

export default ConteinerDT;