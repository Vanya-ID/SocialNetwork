import {ActionsTypes, postItemsType, profilePageType} from "./state";

export const addPostAC = () => ({type: 'ADD-POST'} as const)
export const updateNewPostAC = (text: string) => ({type: 'UPDATE-NEW-POST-TEXT', newText: text} as const)


export const profileReducer = (state: profilePageType, action: ActionsTypes) => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost: postItemsType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likeCount: 0
            };
            state.posts.push(newPost)
            state.newPostText = '';
            break;
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText;
            break;
    }
    return state
}