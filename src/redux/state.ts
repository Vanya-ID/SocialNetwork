
export type postItemsType ={
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
            {likeCount: 12, message: 'Hello World'},
            {likeCount: 12, message: 'Move Itd'}
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
             {id: 3, name: " Влад"},
             {id: 41, name: " Вика"}
         ],
     }
}

export default state;

