import React from "react";
import profileCSS from "./Profile.module.css";
import { Navigate } from "react-router-dom";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const Profile = (props) => {
	debugger
	console.log("mapStateToProps called", props.listTasks);
	

    return (
			<div className={profileCSS.profile} >
                <img src = {props.photos==null? props.photos: props.photos.large}  alt="ФОТО" />
				<p>{props.fullName}  id: {props.userId}</p>
				<p>{props.contacts.vk}  </p>
				<p>{props.contacts.facebook}  </p>
				<p>{props.contacts.instagram}  </p>
				<p>{props.contacts.twitter}  </p>
				<p>{props.contacts.website}  </p>
				<p>{props.contacts.youtube}  </p>
				<p>{props.contacts.mainLink} </p>
				<ProfileStatus status = {props.status}/>
			</div>
		)
}

export default Profile;