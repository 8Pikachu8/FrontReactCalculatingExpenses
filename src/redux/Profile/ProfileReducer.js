import { ProfileAPI } from '../../api/api';
import {
    addProfile,
    AddProfile,
    Set_Status,
    TOGGLE_IS_FETCHING,
    ToggleIsFetching
} from './ProfileCA'

const AddProfileState = (newState) => {
    if(newState === -1)
        return{ ...defState}
    const newTask = {
        userId: newState.userId,
        lookingForAJob: newState.lookingForAJob,
        lookingForAJobDescription: newState.lookingForAJobDescription,
        fullName: newState.fullName,
        contacts: {
            github: newState.contacts.github,
            vk: newState.contacts.vk,
            facebook: newState.contacts.facebook,
            instagram: newState.contacts.instagram,
            twitter: newState.contacts.twitter,
            website: newState.contacts.website,
            youtube: newState.contacts.youtube, 
            mainLink: newState.contactsmainLink
        },
        photos: { 
            small: newState.photos.small,
            large: newState.photos.large
        },
        isFetching: newState.isFetching,
        status: "status"
    };

    return {
        ...newState, ...newTask // Создаем новый объект
    };
};


const setFetchingState = (state, action) => {
    const temp = {
        ...state,
        isFetching: action.isFetching,
    };

    return temp
}


const setNewStatus = (state, action) => {
    const temp = {
        ...state,
        status: action.status,
    };

    return temp
}


let defState = {
    userId: -1,
    lookingForAJob: true,
    lookingForAJobDescription: "Description",
    fullName: "Елисеев Иван Владимирович",
    contacts: {
        github: "github",
        vk: "vk",
        facebook: "facebook",
        instagram: "instagram",
        twitter: "twitter",
        website: "website",
        youtube: "youtube",
        mainLink: "mainLink"
    },
    photos: { 
        small: "string",
        large: "string"
    },

    status: "status",

    isFetching: true
}

export const ProfileReducer = (state = defState, action) =>{
    switch (action.type) {
        case addProfile:
            return AddProfileState(action.user); // Возвращаем новое состояние
        case TOGGLE_IS_FETCHING:
            return setFetchingState(state, action);
        case Set_Status:
            return setNewStatus(state, action);
        default:
            return state;
    }
}


export const LoadNewProfile = (userId) => {  
    
    return (dispatch) => {
        dispatch(ToggleIsFetching(false));
        ProfileAPI.GetProfile(userId).then(response => {
            dispatch(AddProfile(response.data));
            dispatch(ToggleIsFetching(response.data === -1? true : true));
        });
    }
}