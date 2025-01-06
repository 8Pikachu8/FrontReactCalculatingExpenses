
import {
    setAuth,
    SetAuth,
    SetLogOut,
    setLogOut
} from './AuthCreateActions'
import { AuthApi } from '../../api/api';
import { LoadNewProfile } from '../Profile/ProfileReducer';

const SetAuthState = (state, Newstate) => {
    const newTask = {
        ...state,
        id: Newstate.data.id,
        email: Newstate.data.email,
        login: Newstate.data.login,
        isAuth: true
    };

    return {
        ...newTask
    };
};

const SetAuthLogOut = (state, Newstate) => {
    const newTask = {
        ...state,
        id: null,
        email: null,
        login: null,
        isAuth: false
    };

    return {
        ...newTask
    };
};

let defState = {
	id: null,
    email: null,
    login: null,
    isAuth: false,
    isPopUpVisible: false
}
export const AuthReducer = (state = defState, action) =>{
    switch (action.type) {
        case setAuth:
            return SetAuthState(state, action); // Возвращаем новое состояние
        case setLogOut:
            return SetAuthLogOut(state, action); // Возвращаем новое состояние
        default:
            return state;
    }
}

export const SetNewAuth = () => {

    return (dispatch) => {
        AuthApi.SetAuthApi().then(response => {
            if(response.data.resultCode ===0){
                dispatch(SetAuth(response.data.data));
            }
                
        });
    }
}

export const LogInFunc = (email, password) => {
    return (dispatch) => {
        return AuthApi.LogIn(email, password)
            .then(response => {
                if (response.data.resultCode === 0) {
                    localStorage.setItem("sn-token", response.data.data.token);
                    return AuthApi.SetAuthApi()  // Возвращаем следующий запрос
                        .then(response => {
                            if (response.data.resultCode === 0) {
                                dispatch(SetAuth(response.data.data));
                            }
                            return response.data.data;  // Возвращаем ответ
                        });
                } else {
                    throw new Error("Ошибка авторизации");
                }
            })
            .catch(err => {
                throw err;  // Обрабатываем ошибку
            });
    };
};


export const LogOutFunc = () => {

    return (dispatch) => {
        AuthApi.LogOut().then(response => {
            if(response.data.resultCode === 0){
                dispatch(SetLogOut());
            }
                
        });
    }
}