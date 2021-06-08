import {ActionsTypes, postItemsType, profilePageType} from "./state";

export const addPostAC = () => ({type: 'ADD-POST'} as const)
export const updateNewPostAC = (text: string) => ({type: 'UPDATE-NEW-POST-TEXT', newText: text} as const)
export const setUserProfile = (profile: any) => ({type: 'SET-USER-PROFILE', profile} as const)

let initialState = {
    posts: [
        {id: 1, likeCount: 12, message: 'Hello World'},
        {id: 2, likeCount: 12, message: 'Move Itd'}
    ],
    newPostText: "it-kamasutra",
    profile: {}
}

export const profileReducer = (state: profilePageType = initialState, action: ActionsTypes): profilePageType => {
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