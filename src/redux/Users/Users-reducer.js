
import {
	FOLLOW,
    UNFOLLOW,
    SET_USERS,
    SET_CURRENT_PAGE,
    SET_TOTAL_USERS_COUNT,
    TOGGLE_IS_FETCHING,
    Toggle_Is_Fetching_Loader,
    TOGGLE_IS_FOLLOWING_PROGRESS, follow, unfollow, setUsers, SetCurrentPage,SetTotalUsersCount,ToggleIsFetching, ToggleIsFetchingLoader, ToggleIsFollowingProgress
} from './UsersAC'
import {UserAPI } from '../../api/api';


let defState = {

    users: [ ],

    countUsers: 1003,

    currentPage: 1,

    countLoad: 0,

    isFetching: true,

    isFetchingLoader: true,

    toogleIsFollowing: []
}

export const UsersReducer = (state = defState, action) =>{
    switch (action.type) {
        case FOLLOW:
            return SetFollow(state, action); 
        case UNFOLLOW:
            return SetUnfollow(state, action); 
        case SET_USERS:
            return setUsersState(state, action); 
        case SET_CURRENT_PAGE:
            return setCurrentPageState(state, action);
        case SET_TOTAL_USERS_COUNT:
            return setTotalUsersCountState(state, action);
        case TOGGLE_IS_FETCHING:
            return setFetchingState(state, action);
        case Toggle_Is_Fetching_Loader:
            return setFetchingLoaderState(state, action);
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return setFollowingState(state,action);
        default:
            return state;
    }
}

const SetFollow = (state, action) => {
    return {...state,
                users: state.users.map(u => {
                if(u.id === action.id){
                    return {...u, followed: true}
                }
                return u; })}; 
}

const SetUnfollow = (state, action) => {
    const temp = {...state,
                users: state.users.map(u => {
                if(u.id === action.id){
                    return {...u, followed: false}
                }
                return u; })};
    return temp; 
}

const setUsersState = (state, action) => {
    const temp = {
        ...state,
        users: [...state.users, ...action.users.filter(newUser => 
    !state.users.some(existingUser => existingUser.id === newUser.id))],
        countLoad: state.countLoad + 1};
    return temp
    
}

const setCurrentPageState = (state, action) => {
    const temp = {
        ...state,
        users: [...action.users],
        currentPage: action.page,
        countLoad: 1,};
    return temp
    
}

const setTotalUsersCountState = (state, action) => {
    const temp = {
        ...state,
        countUsers: action.usersCount};
    return temp
    
}

const setFetchingState = (state, action) => {

    const temp = {
        ...state,
        isFetching: action.isFetching,
        };

    const temp2= {
        ...state,
        isFetching: action.isFetching,
        users:[]};

    return action.isFetching ? temp2:temp
}

const setFetchingLoaderState = (state, action) => {

    const temp = {
        ...state,
        isFetchingLoader: action.isFetchingLoader,
    };

    return temp
}

const setFollowingState = (state, action) => {

    const temp = {
        ...state,
        toogleIsFollowing: state.toogleIsFollowing.some(id=> id===action.toogleIsFollowing)? 
                            state.toogleIsFollowing.filter(id => id!== action.toogleIsFollowing):
                            [...state.toogleIsFollowing, action.toogleIsFollowing],
    };

    return temp
}

export const GetUsersNewPageThunkCreator = (currentPage) => {  
    
    return (dispatch) => {
        dispatch(ToggleIsFetching(true))
        UserAPI.GetUsersDefault(currentPage).then(response => {
            dispatch(SetCurrentPage(currentPage, response.data.items));
            dispatch(SetTotalUsersCount(response.data.totalCount));
            dispatch(ToggleIsFetching(false));
        });
    }
}

export const GetUsersPreloadingPageThunkCreator = (currentPage, countLoad) => {  
    
    return (dispatch) => {
        dispatch(ToggleIsFetchingLoader(false));
        UserAPI.GetUsersPreloadingOnePage(currentPage, countLoad).then(response => {
            dispatch(setUsers(response.data.items));
            dispatch(ToggleIsFetchingLoader(true));
        });
    }
}

export const SetFollowingOnUser = (userId) => {  
    
    return (dispatch) => {
        dispatch(ToggleIsFollowingProgress(userId));
        UserAPI.AddFollowApi(userId).then(response => {
                if(response.data.resultCode ===0){
                    dispatch(follow(userId))
                }
            dispatch(ToggleIsFollowingProgress(userId))
        });
    }
}

export const DeleteFollowingOnUser = (userId) => {  
    
    return (dispatch) => {
        dispatch(ToggleIsFollowingProgress(userId));
        UserAPI.DeleteFollowApi(userId).then(response => {
                if(response.data.resultCode ===0){
                    dispatch(unfollow(userId))
                }
            dispatch(ToggleIsFollowingProgress(userId))
        });
    }
}