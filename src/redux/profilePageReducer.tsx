import {ActionsTypes, postItemsType} from "./state";
import {ProfileInfoType} from "../compomemts/Profile/ProfileInfo/ProfileInfo";
import {Dispatch} from "redux";
import axios from "axios";
import {usersAPI} from "../api/api";

export const addPostAC = () => ({type: 'ADD-POST'} as const)
export const updateNewPostAC = (text: string) => ({type: 'UPDATE-NEW-POST-TEXT', newText: text} as const)
export const setUserProfile = (profile: any) => ({type: 'SET-USER-PROFILE', profile} as const)

type initialStateType = {
    posts: Array<postItemsType>
    newPostText: string
    profile: ProfileInfoType | null
}

let initialState: initialStateType = {
    posts: [
        {id: 1, likeCount: 12, message: 'Hello World'},
        {id: 2, likeCount: 12, message: 'Move Itd'}
    ],
    newPostText: "it-kamasutra",
    profile: null
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