import axios from "axios";

const Authorization = "Bearer ae4080b7-6a89-4752-9805-0c12a3de3951";

export const GetUsersDefault = (currentPage) => {

    const str = `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=10`;

    return axios.get(str, { headers: {
        "Authorization": Authorization
    }})
} 

export const GetUsersPreloadingOnePage  = (currentPage, countLoad) => {
    const str = `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage + countLoad}&count=10`;
        
    return axios.get(str, { headers: {
        "Authorization": Authorization
    }});
} 

export const GetUsersCurrentPage = (val) => {

    const str = `https://social-network.samuraijs.com/api/1.0/users?page=${val}&count=10`;
        
    return axios.get(str, { headers: {
        "Authorization": Authorization
    }});
} 

export const GetProfile = (userId) => {
    const str = `https://social-network.samuraijs.com/api/1.0/profile/${userId == null? 2:userId}`;
    
    return axios.get(str);
}

export const SetAuthApi = () => {
    const str = `https://social-network.samuraijs.com/api/1.0/auth/me`;
    axios.defaults.withCredentials = true;
    return axios.get(str, { headers: {
        "Authorization": Authorization
    }});
}

export const AddFollowApi = (id) =>{
    const str = `https://social-network.samuraijs.com/api/1.0/follow/${id}`;
                    
    return axios.post(str,{}, {withCredentials: true,
                        headers: {
                                    "API-KEY" : "080fb9e7-833a-47e0-b3c2-142d9d302f9d",
                                    "Authorization": "Bearer ae4080b7-6a89-4752-9805-0c12a3de3951"
                                }
    })
}

export const DeleteFollowApi = (id) =>{
    const str = `https://social-network.samuraijs.com/api/1.0/follow/${id}`;
                   
    return  axios.delete(str, {withCredentials: true,
                               headers: {
                                          "API-KEY" : "080fb9e7-833a-47e0-b3c2-142d9d302f9d",
                                        "Authorization": "Bearer ae4080b7-6a89-4752-9805-0c12a3de3951"
                                        }
                    })
}