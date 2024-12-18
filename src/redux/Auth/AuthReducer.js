import {
    setAuth
} from './AuthCreateActions'

const SetAuth = (state) => {
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
            return SetAuth(action); // Возвращаем новое состояние
        default:
            return state;
    }
}