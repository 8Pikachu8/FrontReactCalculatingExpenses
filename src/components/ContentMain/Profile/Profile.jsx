import React from "react";
import profileCSS from "./Profile.module.css";

const Profile = (props) => {
	console.log("mapStateToProps called", props.listTasks);
    return (
			<div className={profileCSS.profile} >
                <img src = {props.photos.large}  alt="ФОТО" />
				<p>{props.fullName}  id: {props.userId}</p>
			</div>
		)
}

export default Profile;