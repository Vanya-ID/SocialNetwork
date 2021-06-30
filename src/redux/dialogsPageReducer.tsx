import {ActionsTypes, messagesPageType} from "./state";

export const sendMessageAC = (newMessage: string) => ({type: 'SEND-NEW-MESSAGE-TEXT', newMessage} as const)

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
    ]
}

export const dialogsReducer = (state: messagesPageType = initialState, action: ActionsTypes): messagesPageType => {

    switch (action.type) {
        case 'SEND-NEW-MESSAGE-TEXT':
            return {
                ...state,
                messages: [...state.messages, {
                    id: new Date().getTime(),
                    message: action.newMessage
                }]
            }
    }
    return {...state}
}