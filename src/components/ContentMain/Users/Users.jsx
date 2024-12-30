import React from "react";
import usersCSS from "./Users.module.css";
import User from "./user/User";
import LoaderSpiner from "./../../../assets/LoaderSpiner.svg"
import TupeSpiner from "./../../../assets/tube-spinner.svg"

let Users = (props) => {
    const renderUsers = () => {
        
        return props.users.map(user => (
            <User
                key={user.id}
                user={user}
                toogleIsFollowing = {props.toogleIsFollowing}
                SetFollowingOnUser = {props.SetFollowingOnUser}
                DeleteFollowingOnUser = {props.DeleteFollowingOnUser}
            />
        ));
    };
    return <div>
                {props.isFetching === true? <img className={usersCSS.img} src = {LoaderSpiner}  alt="ФОТО" />: null}
                <div className={usersCSS.ListPages}>
                    {props.renderItemsPages()}
                </div>
                <div className={usersCSS.users}>
                    <div  className={usersCSS.usersMaped}>
                        {renderUsers()}
                    </div>
                </div>
                <div className={usersCSS.buttonDiv}>
                    {props.isFetchingLoader ? <button onClick={props.fetchUsers} className={usersCSS.button}>
                        Загрузить еще
                    </button>: <img className={usersCSS.imgLoader}  src = {TupeSpiner}  alt="ФОТО" />}
                    
                </div>
            </div>
}


export default Users;
