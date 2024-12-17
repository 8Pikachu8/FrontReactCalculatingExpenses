import {
    addProfile,
    updateProfile
} from './ProfileCA'

const AddProfile = (newState) => {
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
        }
    };

    return {
        ...newState, ...newTask // Создаем новый объект
    };
};

const UpdateProfile = (val, state) => {
    return {
        ...state,
        newTask: { ...state.newTask, Task: val }, // Создаем новый объект с обновленным значением
    };
};


let defState = {
    userId: 2,
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
    }
}
export const ProfileReducer = (state = defState, action) =>{
    switch (action.type) {
        case addProfile:
            return AddProfile(action.user); // Возвращаем новое состояние
        case updateProfile:
            return UpdateProfile(action.val, state); // Возвращаем новое состояние
        default:
            return state;
    }
}