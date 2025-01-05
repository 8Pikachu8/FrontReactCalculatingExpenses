
export let AddProfile = (user) => ( {type: addProfile, user}
)

export let UpdateProfile = (val) => ( {
        type: updateProfile,
        val: val
    }
)

export let SetStatus = (val) => ( {
        type: Set_Status,
        val: val
    }
)

export const ToggleIsFetching = (isFetching) => ({type:  TOGGLE_IS_FETCHING, isFetching})


export const addProfile = 'Add-Profile'

export const updateProfile = 'Update-Profile'

export const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

export const Set_Status = 'Set_Status';