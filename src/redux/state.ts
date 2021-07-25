import {addPostAC, deletePost, setStatus, setUserProfile} from "./profilePageReducer";
import {sendMessageAC} from "./dialogsPageReducer";
import {
    followSuccess,
    setCurrentPage,
    setUsers,
    setUsersTotalCount, toggleFollowingInProgress,
    toggleIsFetching,
    unfollowSuccess
} from "./UsersReducer";
import {setAuthUserData} from "./authReducer";
import {setInitialized} from "./appReducer";

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
    profile: null
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
    _callSubscribe: (state?: any) => void

    getState: () => RootStateType
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsTypes) => void
}

export type ActionsTypes = ReturnType<typeof addPostAC> |
    ReturnType<typeof sendMessageAC> |
    ReturnType<typeof followSuccess> |
    ReturnType<typeof unfollowSuccess> |
    ReturnType<typeof setUsers> |
    ReturnType<typeof setCurrentPage> |
    ReturnType<typeof setUsersTotalCount> |
    ReturnType<typeof toggleIsFetching> |
    ReturnType<typeof setUserProfile> |
    ReturnType<typeof setAuthUserData> |
    ReturnType<typeof toggleFollowingInProgress> |
    ReturnType<typeof setStatus> |
    ReturnType<typeof setInitialized>
    | ReturnType<typeof deletePost>


/*
let
    store: StoreType = {
        _state: {
            profilePage: {
                posts: [
                    {id: 1, likeCount: 12, message: 'Hello World'},
                    {id: 2, likeCount: 12, message: 'Move Itd'}
                ],
                newPostText: "it-kamasutra",
                profile: null
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
*/


