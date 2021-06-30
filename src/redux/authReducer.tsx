import {ActionsTypes} from "./state";
import {Dispatch} from "redux";
import {authAPI} from "../api/api";

export const setAuthUserData = (userId: number | null,
                                email: string | null,
                                login: string | null,
                                isAuth: boolean
) =>
    ({type: 'SET-AUTH-USER-DATA', data: {userId, email, login, isAuth}} as const)

export type initialUsersType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

let initialState: initialUsersType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state: initialUsersType = initialState, action: ActionsTypes): initialUsersType => {
    switch (action.type) {
        case 'SET-AUTH-USER-DATA':
            return {
                ...state,
                ...action.data,
            }
        default:
            return {...state}
    }
}

export const getAuthMe = () => {
    return (dispatch: Dispatch) => {
        authAPI.getAuthMe()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data
                    dispatch(setAuthUserData(id, email, login, true))
                }
            });
    }
}

export const login = (email: string, password: string, rememberMe: boolean = false) => {
    return (dispatch: Dispatch | any ) => {
        authAPI.login(email, password, rememberMe)
            .then(data => {
                if (data.resultCode === 0) {
                  dispatch(getAuthMe())
                }
            });
    }
}

export const logout = () => {
    return (dispatch: Dispatch) => {
        authAPI.logout()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false))
                }
            });
    }
}