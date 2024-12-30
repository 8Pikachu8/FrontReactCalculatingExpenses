
export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UNFOLLOW';
export const SET_USERS = 'SET_USERS';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
export const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
export const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';
export const Toggle_Is_Fetching_Loader = 'Toggle_Is_Fetching_Loader';

export const follow = (id) => ({type:  FOLLOW,  id})

export const unfollow = (id) => ({type:  UNFOLLOW, id})

export const setUsers = (users) => ({type:  SET_USERS,  users})

export const SetCurrentPage = (page, users) => ({type:  SET_CURRENT_PAGE,  page, users})

export const SetTotalUsersCount = (usersCount) => ({type:  SET_TOTAL_USERS_COUNT, usersCount})

export const ToggleIsFetching = (isFetching) => ({type:  TOGGLE_IS_FETCHING, isFetching})

export const ToggleIsFetchingLoader = (isFetchingLoader) => ({type: Toggle_Is_Fetching_Loader, isFetchingLoader})

export const ToggleIsFollowingProgress = (toogleIsFollowing) => ({type:TOGGLE_IS_FOLLOWING_PROGRESS, toogleIsFollowing})