import Auth from './Auth'
import { connect } from "react-redux";
import React from 'react'

import {LogInFunc} from './../../../redux/Auth/AuthReducer'
import { compose } from 'redux';


class AuthConteiner extends React.Component{
    render(){
       return <Auth state = { this.props.state} LogInFunc = {this.props.LogInFunc}/>
    }
}

const mapStateToProps = (state) =>{

    return {
        state: state,
    }
}


export default compose(connect(mapStateToProps,{LogInFunc}))(AuthConteiner);