import React from "react";
import {AddProfile, ToggleIsFetching} from './../../../redux/Profile/ProfileCA'
import { connect } from "react-redux";
import Profile from './Profile';
import { useParams } from "react-router-dom";
import LoaderSpiner from "./../../../assets/LoaderSpiner.svg"
import { LoadNewProfile } from "../../../redux/Profile/ProfileReducer";

class ProfileConteiner extends React.Component {
    
    componentDidMount() {
        this.props.LoadNewProfile(this.props.userId == null? this.props.authId == null ? -1:this.props.authId: this.props.userId);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.authId !== prevProps.authId && this.props.userId == null) {
            this.props.LoadNewProfile(this.props.authId);
        }
    }

    render(){
        return this.props.isFetching ? <Profile {...this.props}/> : <img src={LoaderSpiner} alt="ФОТО" />
    }
}

const mapStateToProps = (state) =>{
    return {
        userId: state.ProfilePage.userId,
        fullName: state.ProfilePage.fullName,
        contacts: state.ProfilePage.contacts,
        photos: state.ProfilePage.photos,
        lookingForAJob: state.ProfilePage.lookingForAJob,
        authId: state.AuthPage.id,
        isFetching: state.ProfilePage.isFetching,
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        
        AddProfile: (user) => {
            dispatch(AddProfile(user))
        },
        ToggleIsFetching: (isFetching) =>{
            dispatch(ToggleIsFetching(isFetching))
        }
    }
}

const WithRouterProfile = (props) => {
    const { id } = useParams();
    return <ProfileConteiner {...props} userId={id} />;
};


export default connect(mapStateToProps,{ AddProfile, LoadNewProfile, ToggleIsFetching})(WithRouterProfile);