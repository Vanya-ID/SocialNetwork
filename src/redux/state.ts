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

export type StoreType = {
    _state: RootStateType
    _callSubscribe: () => void

    getState: () => RootStateType
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsTypes) => void
}

type AddPostActionType = {
    type: 'ADD-POST'
}
type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}

export type ActionsTypes = AddPostActionType | UpdateNewPostTextActionType

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
        }
    }

}
export default store;


