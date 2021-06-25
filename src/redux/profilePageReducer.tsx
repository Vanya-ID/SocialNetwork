import {ActionsTypes, postItemsType} from "./state";
import {ProfileInfoType} from "../compomemts/Profile/ProfileInfo/ProfileInfo";
import {Dispatch} from "redux";
import axios from "axios";
import {profileAPI, usersAPI} from "../api/api";
import {debuglog} from "util";

export const addPostAC = () => ({type: 'ADD-POST'} as const)
export const updateNewPostAC = (text: string) => ({type: 'UPDATE-NEW-POST-TEXT', newText: text} as const)
export const setUserProfile = (profile: any) => ({type: 'SET-USER-PROFILE', profile} as const)
export const setStatus = (status: string) => ({type: 'SET-STATUS', status} as const)

type initialStateType = {
    posts: Array<postItemsType>
    newPostText: string
    profile: ProfileInfoType | null
    status: string
}

let initialState: initialStateType = {
    posts: [
        {id: 1, likeCount: 12, message: 'Hello World'},
        {id: 2, likeCount: 12, message: 'Move Itd'}
    ],
    newPostText: "it-kamasutra",
    profile: null,
    status: ''
}

export const profileReducer = (state = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost: postItemsType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likeCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }

        case 'UPDATE-NEW-POST-TEXT':
            return {
                ...state,
                posts: [...state.posts],
                newPostText: action.newText
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
    }
    return {...state}
}

export const getUserProfile = (userId: string | undefined) => {
    return (dispatch: Dispatch) => {
        if (!userId) {
            userId = '2'
        }
        usersAPI.getUserProfile(userId)
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
    debugger
    profileAPI.updateStatus(status)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
}