import {
	FOLLOW,
    UNFOLLOW,
    SET_USERS
} from './UsersAC'


let defState = {

    users: [ ],

    countUsers: 0
}

export const UsersReducer = (state = defState, action) =>{
    switch (action.type) {
        case FOLLOW:
            return follow(state, action); 
        case UNFOLLOW:
            return unfollow(state, action); 
        case SET_USERS:
            return setUsers(state, action); 
        default:
            return state;
    }
}

const follow = (state, action) => {
    debugger
    return {...state,
                users: state.users.map(u => {
                if(u.id === action.id){
                    return {...u, followed: true}
                }
                return u; })}; 
}

const unfollow = (state, action) => {
    const temp = {...state,
                users: state.users.map(u => {
                if(u.id === action.id){
                    return {...u, followed: false}
                }
                return u; })};
    return temp; 
}

const setUsers = (state, action) => {
    const temp = {
        ...state,
        users: [...state.users,  ...action.users]};
    return temp
    
}