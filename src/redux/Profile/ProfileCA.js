
export let AddProfile = (user) => ( {type: addProfile, user}
)

export let UpdateProfile = (val) => ( {
        type: updateProfile,
        val: val
    }
)

export const addProfile = 'Add-Profile'

export const updateProfile = 'Update-Profile'