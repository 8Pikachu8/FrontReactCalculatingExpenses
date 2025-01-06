import React from "react";
import {AddProfile, SetStatus, ToggleIsFetching} from './../../../redux/Profile/ProfileCA'
import { connect } from "react-redux";
import Profile from './Profile';
import { useParams } from "react-router-dom";
import LoaderSpiner from "./../../../assets/LoaderSpiner.svg"
import { LoadNewProfile, LoadNewStatus, UpdateNewStatus } from "../../../redux/Profile/ProfileReducer";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileConteiner extends React.Component {
    
    componentDidMount() {
        this.props.LoadNewProfile(this.props.userId == null? this.props.authId == null ? -1:this.props.authId: this.props.userId);
        this.props.LoadNewStatus(this.props.userId);
    }

    componentDidUpdate(prevProps, prevState) {
        
        if (prevProps.userId !== this.props.userId) {
            const userId =
                this.props.userId;
            this.props.LoadNewProfile(userId);
            this.props.LoadNewStatus(userId);
        }
        
    }

    updateStatus = (event) => {
        let text = event.target.value
        this.props.SetStatus(text);
    }

    render() {
        return this.props.isFetching ? <Profile {...this.props} updateStatus={this.updateStatus} /> : <img src={LoaderSpiner} alt="ФОТО" />
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
        status: state.ProfilePage.status
    }
}

const WithRouterProfile = (props) => {
    const { id } = useParams();
    const userId = id ? parseInt(id, 10) : null;
    return <ProfileConteiner {...props} userId={userId} />;
};


export default compose(connect(mapStateToProps,{ AddProfile, LoadNewProfile, ToggleIsFetching, LoadNewStatus, SetStatus, UpdateNewStatus}),withAuthRedirect)(WithRouterProfile)