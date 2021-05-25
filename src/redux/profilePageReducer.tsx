import {ActionsTypes, postItemsType, profilePageType} from "./state";

export const addPostAC = () => ({type: 'ADD-POST'} as const)
export const updateNewPostAC = (text: string) => ({type: 'UPDATE-NEW-POST-TEXT', newText: text} as const)

let initialState = {
    posts: [
        {id: 1, likeCount: 12, message: 'Hello World'},
        {id: 2, likeCount: 12, message: 'Move Itd'}
    ],
    newPostText: "it-kamasutra"
}

export const profileReducer = (state: profilePageType = initialState, action: ActionsTypes): profilePageType => {
    let copyState= {...state, posts:  [...state.posts]}

    switch (action.type) {
        case 'ADD-POST': {
            let newPost: postItemsType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likeCount: 0
            };
            copyState.posts.push(newPost)
            copyState.newPostText = '';
            return copyState;
        }
        case 'UPDATE-NEW-POST-TEXT':
            copyState.newPostText = action.newText;
            return copyState;
    }
    return {...state}
}