import { retry } from '@reduxjs/toolkit/query';
import {
    setAuth,
    SetAuth
} from './AuthCreateActions'
import { SetAuthApi } from '../../api/api';

const SetAuthState = (state) => {
    const newTask = {
        id: state.data.id,
        email: state.data.email,
        login: state.data.login,
    };

    return {
        ...state.data,
        ...newTask
    };
};




let defState = {
	id: null,
    email: null,
    login: null,
    isLogin: null
}
export const AuthReducer = (state = defState, action) =>{
    switch (action.type) {
        case setAuth:
            return SetAuthState(action); // Возвращаем новое состояние
        default:
            return state;
    }
}

export const SetNewAuth = () => {

    return (dispatch) => {
        SetAuthApi().then(response => {
            console.log(response.data.data)
            if(response.data.resultCode ===0){
                dispatch(SetAuth(response.data.data));
            }
                
        });
    }
}