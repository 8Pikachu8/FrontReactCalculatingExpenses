import {followAC, unfollowAC, setUsersAC, SetCurrentPage,SetTotalUsersCountAC} from './../../../redux/Users/UsersAC'
import Users from "./Users";
import { connect } from "react-redux";


const mapStateToProps = (state) =>{
    console.log("mapStateToProps called", state.UsersPage);
    return {
        users: state.UsersPage.users,
        countUsers: state.UsersPage.countUsers,
        currentPage: state.UsersPage.currentPage,
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        CallBackFollow: (userId) => {
            dispatch(followAC(userId))
        },
        CallBackUnFollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        CallBackSetUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        CallBackSetPage: (page , users) => {
            dispatch(SetCurrentPage(page, users))
        },
        CallBackSetTotalUserCount: ( totalUsers) => {
            dispatch(SetTotalUsersCountAC(totalUsers))
        }
    }
}

const ConteinerDT = connect(mapStateToProps, mapDispatchToProps)(Users)

export default ConteinerDT;