import React from "react";
import popupCSS from "./PopUp.module.css";

const Popup = ({ onProfileClick, onLogoutClick }) => {
    return (
        <div className={popupCSS.popup}>
            <button className={popupCSS.button} onClick={onProfileClick}>
                Перейти в профиль
            </button>
            <button className={popupCSS.button} onClick={onLogoutClick}>
                Выйти из аккаунта
            </button>
        </div>
    );
};

export default Popup;