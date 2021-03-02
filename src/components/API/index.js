import * as axios from "axios";


const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": 'dc252a77-0cdf-4597-a919-310bf54ece47'
    }
})

export const usersAPI ={
    getUsers(currentPages, pageSize){
        return axiosInstance.get(`users?page=${currentPages}&count=${pageSize}`).
        then(response => response.data)
    },
    follow(id){
        return axiosInstance.post(`follow/${id}`).then(response => response.data)
    },
    unfollow(id){
        return axiosInstance.delete(`follow/${id}`).then(response => response.data)
    },
    getUserProfile(currentUsersProfile){
        console.warn("Obsolete method. Please use ProfileAPI")
        return profileAPI.getUserProfile(currentUsersProfile);
    },
}

export const profileAPI ={
    getUserProfile(currentUsersProfile){
        return axiosInstance.get(`profile/${currentUsersProfile}`).then(response => response.data)
    },
    getStatus(userId){
        return axiosInstance.get(`profile/status/${userId}`)
    },
    updateStatus(userStatus){
        return axiosInstance.put('profile/status', {
            status: userStatus
        })
    }
}

export const authAPI = {
    Me(){
        return axiosInstance.get(`auth/me`).then(response => response.data)
    },
    login(email, password, rememberMe = false){
        return axiosInstance.post(`auth/login`, {
            email,
            password,
            rememberMe
        })
    },
    logout(){
        return axiosInstance.delete(`auth/login`)
    }
}


