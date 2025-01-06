import axios from "axios";

const Authorization = "Bearer ae4080b7-6a89-4752-9805-0c12a3de3951";
const ApiKey = "080fb9e7-833a-47e0-b3c2-142d9d302f9d";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers:{
            "API-KEY" : ApiKey,
            "Authorization": Authorization
            },
});


export const UserAPI = {
    GetUsersDefault(currentPage){

        const str = `users?page=${currentPage}&count=10`;

        return instance.get(str)
    } ,

    GetUsersPreloadingOnePage (currentPage, countLoad)  {
        const str = `users?page=${currentPage + countLoad}&count=10`;
            
        return instance.get(str);
    } ,

    AddFollowApi(id) {
        const str = `follow/${id}`;
                        
        return instance.post(str)
    },

    DeleteFollowApi(id){
        const str = `follow/${id}`;
                    
        return  instance.delete(str)
    },
}


export const ProfileAPI = {
    GetProfile(userId) {
        const str = `profile/${userId == null? 2:userId}`;
        if(userId === -1){
            return Promise.resolve({
                data: -1,
                status: null,
                statusText: null,
                headers: null,
                config: null,
                request: null
            });
        }
        return instance.get(str);
    },

    GetStatus(userId) {
        const str = `profile/status/${userId}`;
        
        return instance.get(str);
    },

    UpdateStatus(status) {
        const str = `profile/status`;
        
        return instance.put(str, {status: status});
    },
}


export const SetAuthApi = () => {
    const str = `auth/me`;
    
    return instance.get(str);
}

