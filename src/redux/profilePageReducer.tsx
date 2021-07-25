import {ActionsTypes, postItemsType} from "./state";
import {ProfileInfoType} from "../compomemts/Profile/ProfileInfo/ProfileInfo";
import {Dispatch} from "redux";
import {profileAPI, ResultCodeEnum} from "../api/api";

export const addPostAC = (text: string) => ({type: 'ADD-POST', text} as const)
export const setUserProfile = (profile: any) => ({type: 'SET-USER-PROFILE', profile} as const)
export const setStatus = (status: string) => ({type: 'SET-STATUS', status} as const)
export const deletePost = (postId: number) => ({type: 'DELETE-POST', postId} as const)

type initialStateType = {
    posts: Array<postItemsType>
    profile: ProfileInfoType | null
    status: string
}

let initialState: initialStateType = {
    posts: [
        {id: 1, likeCount: 12, message: 'Hello World'},
        {id: 2, likeCount: 12, message: 'Move Itd'}
    ],
    profile: null,
    status: ''
}

export const profileReducer = (state = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost: postItemsType = {
                id: new Date().getTime(),
                message: action.text,
                likeCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost]
            }
        case 'SET-USER-PROFILE':
            return {
                ...state,
                profile: action.profile
            }
        case 'SET-STATUS':
            return {
                ...state,
                status: action.status
            }
        case "DELETE-POST":
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }
    }
    return {...state}
}

export const getUserProfile = (userId: string | undefined) => {
    return (dispatch: Dispatch) => {
        if (!userId) {
            userId = '2'
        }
        profileAPI.getUserProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data))
            });
    }
}
export const getStatus = (userId: string) => (dispatch: Dispatch) => {
    if (!userId) {
        userId = '2'
    }
    profileAPI.getStatus(userId)
        .then(data => {
            dispatch(setStatus(data))
        })
}
export const updateStatus = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status)
        .then(data => {
            if (data.resultCode === ResultCodeEnum.Success) {
                dispatch(setStatus(status))
            }
        })
}
