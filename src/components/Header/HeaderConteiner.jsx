
import { connect } from "react-redux";
import Header from './Header'
import React from "react";
import {SetNewAuth, LogOutFunc} from './../../redux/Auth/AuthReducer'
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { Navigate, useNavigate } from "react-router-dom";
import { withRouter } from "./../../hoc/withAuthRedirect";



class HeaderConteiner extends React.Component {

    componentDidMount() {
        this.props.SetNewAuth();
    }


    onProfileClick = () => {
        this.props.navigate(`/profile/${this.props.id}`);
    }

    onLogoutClick = () =>{
        this.props.LogOutFunc();
    }

    render(){
        return <Header handleGoToProfile = {this.onProfileClick} handleLogout = {this.onLogoutClick} data ={this.props}/>
    }
}


const mapStateToProps = (state) =>{
    window.state = state;
    return {
        id: state.AuthPage.id,
        email: state.AuthPage.email,
        login: state.AuthPage.login,
        isFetching: state.ProfilePage.isFetching,
        isPopUpVisible: state.AuthPage.isPopUpVisible
    }
}


export default compose(connect(mapStateToProps,{SetNewAuth, LogOutFunc}), withRouter)(HeaderConteiner)