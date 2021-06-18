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
        return instance.get('auth/me')
            .then(res => res.data)
    },
    getUserProfile(userId: string) {
        return instance.get('profile/' + userId)
            .then(res => res.data)
    }
}