import {ActionsTypes} from "./state";
import {Dispatch} from "redux";
import axios from "axios";
import {usersAPI} from "../api/api";

export const setAuthUserData = (userId: number,
                                email: string | null,
                                login: string | null
) =>
    ({type: 'SET-AUTH-USER-DATA', data: {userId, email, login}} as const)


export type initialUsersType = {
    userId: number
    email: string | null
    login: string | null
    isAuth: boolean
}

let initialState: initialUsersType = {
    userId: 0,
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
                isAuth: true
            }
        default:
            return {...state}
    }
}

export const getAuthMe = () => {
    return (dispatch: Dispatch) => {
        usersAPI.getAuthMe()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data
                    dispatch(setAuthUserData(id, email, login))
                }
            });
    }
}