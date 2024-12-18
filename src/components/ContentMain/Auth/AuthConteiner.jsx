import Auth from './Auth'
import { connect } from "react-redux";
import React from 'react'


class AuthConteiner extends React.Component{
    render(){
       return <Auth/>
    }
}

const mapStateToProps = (state) =>{

    return {
        state: state,
    }
}


export default connect(mapStateToProps)(AuthConteiner);