
import { connect } from "react-redux";
import Header from './Header'
import React from "react";
import {SetAuth} from './../../redux/Auth/AuthCreateActions'
import axios from "axios";



class HeaderConteiner extends React.Component {

    componentDidMount() {
        const str = `/api/1.0/auth/me`;
        axios.defaults.withCredentials = true;
        axios.get(str, { headers: {
        "Authorization": "Bearer c53c392f-f277-4151-adf7-e7718d3ad0a7"
    }}).then(response => {
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
    return {
        id: state.AuthPage.id,
        email: state.AuthPage.email,
        login: state.AuthPage.login,
    }
}




export default connect(mapStateToProps,{SetAuth})(HeaderConteiner);