import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "6c29e1e8-fc4e-43a9-8828-21203c5a484c"
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
    },
    login(email: string, password: string, rememberMe: boolean = false) {
        return instance.post('auth/login', {
            email,
            password,
            rememberMe
        })
            .then(res => res.data)
    },
    logout(){
        return instance.delete('auth/login')
            .then(res => res.data)
    }
}