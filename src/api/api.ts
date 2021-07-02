import axios from "axios";
import {UserType} from "../redux/UsersReducer";
import {ProfileInfoType} from "../compomemts/Profile/ProfileInfo/ProfileInfo";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "6c29e1e8-fc4e-43a9-8828-21203c5a484c"
    }
})

type getUsersType = {
    items: UserType[]
    totalCount: number
    error: string
}

type unOrFollowOrUpdateStatusType = {
    resultCode: ResultCodeEnum
    messages: string[]
    data: {}
}

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<getUsersType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    },

    follow(id: number) {
        return instance.post<unOrFollowOrUpdateStatusType>(`follow/${id}`)
            .then(res => res.data)
    },

    unFollow(id: number) {
        return instance.delete<unOrFollowOrUpdateStatusType>(`follow/${id}`)
            .then(res => res.data)
    }
}

type getUserProfileType = ProfileInfoType

export const profileAPI = {
    getUserProfile(userId: string) {
        return instance.get<getUserProfileType>('profile/' + userId)
            .then(res => res.data)
    },
    getStatus(userId: string) {
        return instance.get('profile/status/' + userId)
            .then(res => res.data)
    },
    updateStatus(status: string) {
        return instance.put<unOrFollowOrUpdateStatusType>('profile/status', {
            status: status
        })
            .then(res => res.data)
    }
}

export enum ResultCodeEnum {
    Success = 0,
    Error = 1,
    CaptchaIsRequired = 10
}

type authAPIType<D = {}> = {
    data: D
    resultCode: ResultCodeEnum
    messages: Array<string>
}

export const authAPI = {
    getAuthMe() {
        return instance.get<authAPIType<{
            id: number
            email: string
            login: string
        }>>('auth/me')
            .then(res => res.data)
    },
    login(email: string, password: string, rememberMe: boolean = false) {
        return instance.post<authAPIType<{
            userId: number
        }>>('auth/login', {
            email,
            password,
            rememberMe
        })
            .then(res => res.data)
    },
    logout() {
        return instance.delete<authAPIType>('auth/login')
            .then(res => res.data)
    }
}