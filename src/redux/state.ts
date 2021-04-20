import {renderEntireTree} from "../renderEntireTree";

export type postItemsType ={
    id: number
    likeCount: number
    message: string
}
type messageItemsType = {
    id: number
    message: string
}
type dialogItemsType = {
    id:number
    name: string
}
export type profilePageType = {
    posts: Array<postItemsType>
}
export type messagesPageType = {
    messages: Array<messageItemsType>
    dialogs: Array<dialogItemsType>
}

export type RootStateType ={
    profilePage: profilePageType
    dialogsPage: messagesPageType
}


   let  state :RootStateType = {
    profilePage : {
        posts : [
            {id:1,likeCount: 12, message: 'Hello World'},
            {id:2, likeCount: 12, message: 'Move Itd'}
        ]
    },
     dialogsPage: {
         messages: [
             {id: 1, message: " HI"},
             {id: 2, message: " Hello"},
             {id: 3, message: " Like"}
         ],
         dialogs:[
             {id: 1, name: " Dima"},
             {id: 2, name: " Андрей"},
             {id: 41, name: " Вика"}
         ],
     }
}

export let addPost =(postMessage:string)=>{
    let newPost = {
        id: 3,
        message: postMessage,
        likeCount: 0
    };
    state.profilePage.posts.push(newPost)
    renderEntireTree(state);
}

export default state;

