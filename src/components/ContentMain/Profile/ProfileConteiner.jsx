import React from "react";
import {AddProfile, UpdateProfile} from './../../../redux/Profile/ProfileCA'
import { connect } from "react-redux";
import Profile from './Profile';
import axios from "axios";
import { useParams } from "react-router-dom";


class ProfileConteiner extends React.Component {
    
    componentDidMount() {
        debugger
        const str = this.props.userId ?`/api/1.0/profile/${this.props.userId}` :`/api/1.0/profile/${this.props.authId?this.props.authId:2}`;
        axios.get(str).then(response => {
            this.props.AddProfile(response.data);
        });
    }

    render(){
        return <Profile {...this.props}/>
    }
}

const mapStateToProps = (state) =>{
    return {
        userId: state.ProfilePage.userId,
        fullName: state.ProfilePage.fullName,
        contacts: state.ProfilePage.contacts,
        photos: state.ProfilePage.photos,
        lookingForAJob: state.ProfilePage.lookingForAJob,
        authId: state.AuthPage.id
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
        }
    }
}

const WithRouterProfile = (props) => {
    const { id } = useParams();
    return <ProfileConteiner {...props} userId={id} />;
};



export default connect(mapStateToProps, mapDispatchToProps)(WithRouterProfile);