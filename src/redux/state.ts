import {renderEntireTree} from "../renderEntireTree";

export type postItemsType = {
    id: number
    likeCount: number
    message: string
}
type messageItemsType = {
    id: number
    message: string
}
type dialogItemsType = {
    id: number
    name: string
}
export type profilePageType = {
    posts: Array<postItemsType>
    newPostText: string
}
export type messagesPageType = {
    messages: Array<messageItemsType>
    dialogs: Array<dialogItemsType>
}

export type RootStateType = {
    profilePage: profilePageType
    dialogsPage: messagesPageType
}


let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, likeCount: 12, message: 'Hello World'},
            {id: 2, likeCount: 12, message: 'Move Itd'}
        ],
        newPostText: "it-kamasutra"
    },
    dialogsPage: {
        messages: [
            {id: 1, message: " HI"},
            {id: 2, message: " Hello"},
            {id: 3, message: " Like"}
        ],
        dialogs: [
            {id: 1, name: " Dima"},
            {id: 2, name: " Андрей"},
            {id: 41, name: " Вика"}
        ],
    }
}

export let addPost = (postMessage: string) => {
    let newPost: postItemsType = {
        id: new Date().getTime(),
        message: postMessage,
        likeCount: 0
    };
    state.profilePage.posts.push(newPost)
    renderEntireTree(state);
}
export let updatePostText = (newText: string) => {
    state.profilePage.newPostText =newText;
    renderEntireTree(state);
}

export default state;

