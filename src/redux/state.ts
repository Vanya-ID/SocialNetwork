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
    newMessageText: string
}
export type RootStateType = {
    profilePage: profilePageType
    dialogsPage: messagesPageType
}

export type StoreType = {
    _state: RootStateType
    _callSubscribe: (state?: any) => void

    getState: () => RootStateType
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsTypes) => void
}

export type ActionsTypes = ReturnType<typeof addPostAC> |
    ReturnType<typeof updateNewPostAC> |
    ReturnType<typeof sendMessageAC> |
    ReturnType<typeof updateMessageAC>

let store: StoreType = {
    _state: {
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
            newMessageText: ''
        }
    },
    _callSubscribe() {
        console.log("Something benn change")
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscribe = observer
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost: postItemsType = {
                id: new Date().getTime(),
                message: this._state.profilePage.newPostText,
                likeCount: 0
            };
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = '';
            this._callSubscribe();
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscribe();
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.newMessageText;
            this._callSubscribe(this._state)
        } else if (action.type === 'SEND-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.messages.push({
                id: 6,
                message: this._state.dialogsPage.newMessageText
            })
            this._state.dialogsPage.newMessageText = '';
            this._callSubscribe(this._state)
        }
    }
}
export const addPostAC = () => ({type: 'ADD-POST'} as const)
export const updateNewPostAC = (text: string) => ({type: 'UPDATE-NEW-POST-TEXT', newText: text} as const)

export const sendMessageAC = () => ({type: 'SEND-NEW-MESSAGE-TEXT'} as const)
export const updateMessageAC = (newMessageText: string) => ({type: 'UPDATE-NEW-MESSAGE-TEXT', newMessageText: newMessageText} as const)

export default store;


