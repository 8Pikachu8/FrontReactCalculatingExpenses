import React from "react";
import userCSS from "./User.module.css";
import userPhoto from './../../../../assets/logo192.png'
import { NavLink } from "react-router-dom";
import axios from "axios";

const User = (props) => {
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
                {props.user.followed?<button onClick={() => { 
                    const str = `https://social-network.samuraijs.com/api/1.0/follow/${props.user.id}`;
                    debugger
                    axios.delete(str, {withCredentials: true,
                                        headers: {
                                                    "API-KEY" : "080fb9e7-833a-47e0-b3c2-142d9d302f9d",
                                                    "Authorization": "Bearer c53c392f-f277-4151-adf7-e7718d3ad0a7"
                                                }
                    }).then(response => {
                                            if(response.data.resultCode ===0){
                                                props.unfollow(props.user.id)
                                            }
                                        }).catch(error => {
                        console.error("Request failed:", error.response || error.message);
                    });;
                    
                }} className={userCSS.button}>Отписаться</button>:<button onClick={() => { 
                    const str = `https://social-network.samuraijs.com/api/1.0/follow/${props.user.id}`;
                    debugger
                    axios.post(str,{}, {withCredentials: true,
                                        headers: {
                                                    "API-KEY" : "080fb9e7-833a-47e0-b3c2-142d9d302f9d",
                                                    "Authorization": "Bearer c53c392f-f277-4151-adf7-e7718d3ad0a7"
                                                }
                    }).then(response => {
                                            if(response.data.resultCode ===0){
                                                props.follow(props.user.id)
                                            }
                                        }).catch(error => {
                        console.error("Request failed:", error.response || error.message);
                    });;

                    


                }} className={userCSS.button}>Подписаться</button>}
                
            </div>
        </div>
		)
}

export default User;