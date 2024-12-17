import {
	FOLLOW,
    UNFOLLOW,
    SET_USERS,
    SET_CURRENT_PAGE,
    SET_TOTAL_USERS_COUNT
} from './UsersAC'


let defState = {

    users: [ ],

    countUsers: 1003,

    currentPage: 10
}

export const UsersReducer = (state = defState, action) =>{
    switch (action.type) {
        case FOLLOW:
            return follow(state, action); 
        case UNFOLLOW:
            return unfollow(state, action); 
        case SET_USERS:
            return setUsers(state, action); 
        case SET_CURRENT_PAGE:
            return setCurrentPage(state, action);
        case SET_TOTAL_USERS_COUNT:
            return setTotalUsersCount(state, action);
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

const setCurrentPage = (state, action) => {
    debugger
    const temp = {
        ...state,
        users: [...action.users],
        currentPage: action.page};
    return temp
    
}

const setTotalUsersCount = (state, action) => {
    debugger
    const temp = {
        ...state,
        countUsers: action.usersCount};
    return temp
    
}