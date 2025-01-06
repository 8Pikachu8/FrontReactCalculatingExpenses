import axios from "axios";

const Authorization = "Bearer 7e742482-ba54-4dae-8544-42c7f231b2bb";
const ApiKey = "080fb9e7-833a-47e0-b3c2-142d9d302f9d";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers:{
            "API-KEY" : ApiKey,
            "Authorization": Authorization
            },
});

instance.interceptors.request.use(function (config) {
   config.headers["Authorization"] = "Bearer " + localStorage.getItem("sn-token");

   return config;
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

export const AuthApi = {
    SetAuthApi() {
        const str = `auth/me`;
        
        return instance.get(str);
    },

    LogIn(email,password) {
        const str = `auth/login`;
        return instance.post(str,{email: email, password: password, rememberMe: false});
    },

    LogOut() {
        const str = `auth/login`;
        return instance.delete(str);
    }

}

