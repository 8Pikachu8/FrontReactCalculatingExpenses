
import {GetUsersNewPageThunkCreator,GetUsersPreloadingPageThunkCreator,SetFollowingOnUser, DeleteFollowingOnUser} from './../../../redux/Users/Users-reducer'
import Users from "./Users";
import { connect } from "react-redux";
import React from "react";
import usersCSS from "./Users.module.css";
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';


class UsersConteiner extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.GetUsersNewPageThunkCreator(this.props.currentPage);
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


    render() {
        return <>
                
                <Users
                                users = {this.props.users}
                                renderItemsPages = {this.renderItemsPages}
                                fetchUsers = {this.fetchUsers}
                                isFetching = {this.props.isFetching}
                                isFetchingLoader = {this.props.isFetchingLoader}
                                toogleIsFollowing = {this.props.toogleIsFollowing}
                                SetFollowingOnUser = {this.props.SetFollowingOnUser}
                                DeleteFollowingOnUser = {this.props.DeleteFollowingOnUser}
                    />
            </>
    }
}

const mapStateToProps = (state) =>{
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


export default compose(
    connect(mapStateToProps, {
            GetUsersNewPageThunkCreator,
            GetUsersPreloadingPageThunkCreator,
            SetFollowingOnUser,
            DeleteFollowingOnUser 
        }),
    withAuthRedirect)
    (UsersConteiner)