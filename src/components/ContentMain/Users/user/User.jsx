import React from "react";
import userCSS from "./User.module.css";
import userPhoto from './../../../../assets/logo192.png'
import { NavLink } from "react-router-dom";

const User = (props) => {
    return (
        <div className={userCSS.user}>
             <NavLink to={`../profile/${props.user.id}`}>
                <img className={userCSS.image} src = {props.user.photos.small != null?props.user.photos.small:userPhoto } alt="ФОТО" />
			</NavLink>
			<div className='block' >
                <div className={userCSS.userDescription}>
                    <div>{props.user.name}</div>
                    <div>
                        <div>{props.user.status}</div>
                        <div>{props.user.City}</div>
                    </div>
                </div>
			</div>
            <div className={userCSS.buttonDiv}>
                {
                props.user.followed?
                <button disabled = {props.toogleIsFollowing.some(id => id ===props.user.id)} 
                onClick={() => {  props.DeleteFollowingOnUser(props.user.id);}} 
                className={userCSS.button}>Отписаться</button>:
                <button 
                disabled = {props.toogleIsFollowing.some(id => id ===props.user.id)}  
                onClick={() => {  props.SetFollowingOnUser(props.user.id);}} 
                className={userCSS.button}>Подписаться</button>
                }
                
            </div>
        </div>
		)
}

export default User;