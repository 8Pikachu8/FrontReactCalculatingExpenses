import React from "react";
import userCSS from "./User.module.css";
import userPhoto from './../../../../assets/logo192.png'
import { NavLink } from "react-router-dom";

const User = (props) => {
    debugger
    return (
        <div className={userCSS.user}>
             <NavLink
						to={`../profile/${props.user.id}`}
						
					>
                        <img className={userCSS.image} src = {props.user.photos.small != null?props.user.photos.small:userPhoto }/>
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
                {props.user.followed?<button onClick={() => { props.unfollow(props.user.id)}} className={userCSS.button}>Отписаться</button>:<button onClick={() => { props.follow(props.user.id)}} className={userCSS.button}>Подписаться</button>}
                
            </div>
        </div>
		)
}

export default User;