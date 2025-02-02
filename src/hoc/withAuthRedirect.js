import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";


let mapStateToProps = (state) =>{
    return {
        isAuth: state.AuthPage.isAuth,
    }
}

export const withAuthRedirect = (Component) => {

    class RedirectComponent extends React.Component {

        render() {
            if(!this.props.isAuth){
		       return <Navigate to ="/auth"/>;
	        } 

            return <Component {...this.props}/>;

        }
    }

    let ConnectAuthRedirectComponent = connect(mapStateToProps)(RedirectComponent)

    return ConnectAuthRedirectComponent;
}


export const withRouter = (Component) => {
    return (props) => {
        const navigate = useNavigate();
        return <Component {...props} navigate={navigate} />;
    };
};

