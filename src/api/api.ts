import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "eeb7dca6-bca0-43ec-ba8c-846900f182b4"
    }
})


export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    },

    follow(id: number) {
        return instance.post(`follow/${id}`)
            .then(res => res.data)
    },

    unFollow(id: number) {
        return instance.delete(`follow/${id}`)
            .then(res => res.data)
    },

    getAuthMe() {
        console.warn('Low version in get Auth')
        return authAPI.getAuthMe()
    },
    getUserProfile(userId: string) {
        console.warn('Low version in get User')
        return profileAPI.getUserProfile(userId)
    }
}

export const profileAPI = {
    getUserProfile(userId: string) {
        return instance.get('profile/' + userId)
            .then(res => res.data)
    },
    getStatus(userId: string) {
        return instance.get('profile/status/' + userId)
            .then(res => res.data)
    },
    updateStatus(status: string) {
        return instance.put('profile/status', {
            status: status
        })
            .then(res => res.data)
    }
}

export const authAPI = {
    getAuthMe() {
        return instance.get('auth/me')
            .then(res => res.data)
    }
}