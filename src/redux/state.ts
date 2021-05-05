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

let store = {
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
    getState(){
        return this._state;
    },
    _callSubscribe() {
        console.log("Something benn change")
    },
    addPost() {
        let newPost: postItemsType = {
            id: new Date().getTime(),
            message: this._state.profilePage.newPostText,
            likeCount: 0
        };
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = '';
        this._callSubscribe();
    },
    updatePostText(newText: string) {
        this._state.profilePage.newPostText = newText;
        this._callSubscribe();
    },
    subscribe(observer: () => void) {
        this._callSubscribe = observer
    }
}
export default store;


