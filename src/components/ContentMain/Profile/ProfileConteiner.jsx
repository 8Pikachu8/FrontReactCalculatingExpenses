import React from "react";
import {AddProfile, UpdateProfile,ToggleIsFetching} from './../../../redux/Profile/ProfileCA'
import { connect } from "react-redux";
import Profile from './Profile';
import { useParams } from "react-router-dom";
import LoaderSpiner from "./../../../assets/LoaderSpiner.svg"
import { ProfileAPI } from "../../../api/api";

class ProfileConteiner extends React.Component {
    
    componentDidMount() {
        this.props.ToggleIsFetching(false);
        ProfileAPI.GetProfile(this.props.userId == null? this.props.authId == null ? -1:this.props.authId: this.props.userId).then(response => {
            debugger
            this.props.AddProfile(response.data);
           
            this.props.ToggleIsFetching(response.data === -1? false : true);
        });
    }

    componentDidUpdate(prevProps, prevState) {
        debugger
        if (this.props.authId !== prevProps.authId && this.props.userId == null) {
            this.props.ToggleIsFetching(false);
            ProfileAPI.GetProfile(this.props.authId).then(response => {
                this.props.AddProfile(response.data);
                this.props.ToggleIsFetching(true);
        });
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
        CallBackUpdate: (event) => {
            let text = event.target.value
            dispatch(UpdateProfile(text))
            console.log(text)
        },
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


export default connect(mapStateToProps, mapDispatchToProps)(WithRouterProfile);