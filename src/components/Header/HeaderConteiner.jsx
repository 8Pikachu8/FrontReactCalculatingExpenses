
import { connect } from "react-redux";
import Header from './Header'
import React from "react";
import {SetAuth} from './../../redux/Auth/AuthCreateActions'
import axios from "axios";
import { SetAuthApi } from "../../api/api";



class HeaderConteiner extends React.Component {

    componentDidMount() {
        SetAuthApi().then(response => {
            console.log(response.data.data)
            if(response.data.resultCode ===0){
                this.props.SetAuth(response.data.data);
            }
            
        });
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




export default connect(mapStateToProps,{SetAuth})(HeaderConteiner);