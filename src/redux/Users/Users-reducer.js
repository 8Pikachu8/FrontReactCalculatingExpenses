import {
	FOLLOW,
    UNFOLLOW,
    SET_USERS,
    SET_CURRENT_PAGE,
    SET_TOTAL_USERS_COUNT,
    TOGGLE_IS_FETCHING
} from './UsersAC'


let defState = {

    users: [ ],

    countUsers: 1003,

    currentPage: 1,

    countLoad: 0,

    isFetching: true
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
        case TOGGLE_IS_FETCHING:
            return setFetching(state, action);
        default:
            return state;
    }
}

const follow = (state, action) => {
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
        users: [...state.users, ...action.users.filter(newUser => 
    !state.users.some(existingUser => existingUser.id === newUser.id))],
        countLoad: state.countLoad + 1};
    return temp
    
}

const setCurrentPage = (state, action) => {
    const temp = {
        ...state,
        users: [...action.users],
        currentPage: action.page,
        countLoad: 1,};
    return temp
    
}

const setTotalUsersCount = (state, action) => {
    const temp = {
        ...state,
        countUsers: action.usersCount};
    return temp
    
}

const setFetching = (state, action) => {
    const temp = {
        ...state,
        isFetching: action.isFetching};
    return temp
}