import {addPostAC, profileReducer, updateNewPostAC} from "./profilePageReducer";
import {dialogsReducer, sendMessageAC, updateMessageAC} from "./dialogsPageReducer";
import {
    followAC,
    setCurrentPageAC,
    setUsersAC,
    setUsersTotalCountAC, toggleIsFetchingAC,
    unfollowtAC
} from "./UsersReducer";

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
    ReturnType<typeof updateMessageAC> |
    ReturnType<typeof followAC> |
    ReturnType<typeof unfollowtAC> |
    ReturnType<typeof setUsersAC> |
    ReturnType<typeof setCurrentPageAC> |
    ReturnType<typeof setUsersTotalCountAC> |
    ReturnType<typeof toggleIsFetchingAC>


let
    store: StoreType = {
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

            this._state.profilePage = profileReducer(this._state.profilePage, action)
            this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

            this._callSubscribe();
        }
    }


