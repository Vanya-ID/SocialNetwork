import {ActionsTypes} from "./state";
import {Dispatch} from "redux";
import {authAPI, ResultCodeEnum} from "../api/api";
import {stopSubmit} from "redux-form";
import {AppThunk} from "./redux-store";

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

export const authReducer = (state = initialState, action: ActionsTypes): initialUsersType => {
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

export const getAuthMe = () => async (dispatch: Dispatch) => {
    let data = await authAPI.getAuthMe()
    if (data.resultCode === ResultCodeEnum.Success) {
        let {id, login, email} = data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export const login = (email: string, password: string, rememberMe: boolean = false): AppThunk => async dispatch => {
    const data = await authAPI.login(email, password, rememberMe)
    if (data.resultCode === ResultCodeEnum.Success) {
        dispatch(getAuthMe())
    } else {
        let errorMessage = data.messages.length > 0 ? data.messages[0] : 'Some error'
        dispatch(stopSubmit('login', {_error: errorMessage}))
    }
}

export const logout = (): AppThunk => async dispatch => {
    let data = await authAPI.logout()
            if (data.resultCode === ResultCodeEnum.Success) {
                dispatch(setAuthUserData(null, null, null, false))
            }
}
