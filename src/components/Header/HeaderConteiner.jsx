
import { connect } from "react-redux";
import Header from './Header'
import React from "react";
import {SetNewAuth} from './../../redux/Auth/AuthReducer'



class HeaderConteiner extends React.Component {

    componentDidMount() {
        this.props.SetNewAuth();
    }

    render(){
        return <Header data ={this.props}/>
    }
}

const mapStateToProps = (state) =>{
    window.state = state;
    return {
        id: state.AuthPage.id,
        email: state.AuthPage.email,
        login: state.AuthPage.login,
        isFetching: state.ProfilePage.isFetching
    }
}




export default connect(mapStateToProps,{SetNewAuth})(HeaderConteiner);