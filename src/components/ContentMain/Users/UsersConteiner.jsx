
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

    mappingArray = (listPages) => {
        return listPages.map(val => (
                <div
                    key={val}
                    onClick={() => this.props.GetUsersNewPageThunkCreator(val)}
                    className={this.props.currentPage === val ? usersCSS.ItemPagesSelected : usersCSS.ItemPages}
                >
                    {val}
                </div>
            ));
    }


    render() {
        return <>
                
                <Users
                                users = {this.props.users}
                                renderItemsPages = {this.renderItemsPages}
                                currentPage = {this.props.currentPage}
                                countUsers = {this.props.countUsers}
                                fetchUsers = {this.fetchUsers}
                                isFetching = {this.props.isFetching}
                                isFetchingLoader = {this.props.isFetchingLoader}
                                toogleIsFollowing = {this.props.toogleIsFollowing}
                                SetFollowingOnUser = {this.props.SetFollowingOnUser}
                                DeleteFollowingOnUser = {this.props.DeleteFollowingOnUser}
                                mappingArray = { this.mappingArray}
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