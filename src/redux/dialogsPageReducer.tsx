import {ActionsTypes, messagesPageType} from "./state";

export const sendMessageAC = () => ({type: 'SEND-NEW-MESSAGE-TEXT'} as const)
export const updateMessageAC = (newMessageText: string) => ({
    type: 'UPDATE-NEW-MESSAGE-TEXT',
    newMessageText: newMessageText
} as const)

let initialState = {
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

export const dialogsReducer = (state: messagesPageType = initialState, action: ActionsTypes): messagesPageType => {

    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-TEXT':
            return {
                ...state,
                newMessageText: action.newMessageText
            }

        case 'SEND-NEW-MESSAGE-TEXT':
            return {
                ...state,
                messages: [...state.messages, {
                    id: new Date().getTime(),
                    message: state.newMessageText
                }],
                newMessageText: ''
            }
    }
    return {...state}
}