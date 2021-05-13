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

export const dialogsReducer = (state: messagesPageType=initialState, action: ActionsTypes) => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-TEXT':
            state.newMessageText = action.newMessageText;
            break;
        case 'SEND-NEW-MESSAGE-TEXT':
            state.messages.push({
                id: 6,
                message: state.newMessageText
            })
            state.newMessageText = '';
            break;
    }
    return state
}