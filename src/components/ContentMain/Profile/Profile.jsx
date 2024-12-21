import React from "react";
import profileCSS from "./Profile.module.css";

const Profile = (props) => {
	console.log("mapStateToProps called", props.listTasks);
    return (
			<div className={profileCSS.profile} >
                <img src = {props.photos.large}/>
				<p>{props.fullName}   {props.authId}</p>
			</div>
		)
}

export default Profile;