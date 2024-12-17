import {followAC, unfollowAC, setUsersAC} from './../../../redux/Users/UsersAC'
import Users from "./UsersCopy";
import { connect } from "react-redux";


const mapStateToProps = (state) =>{
    console.log("mapStateToProps called", state.UsersPage);
    return {
        users: state.UsersPage.users,
        countUsers: state.UsersPage.countUsers,
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
        }
    }
}

const ConteinerDT = connect(mapStateToProps, mapDispatchToProps)(Users)

export default ConteinerDT;