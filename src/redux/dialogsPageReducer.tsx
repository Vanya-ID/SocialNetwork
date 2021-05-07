import {ActionsTypes, messagesPageType} from "./state";

export const sendMessageAC = () => ({type: 'SEND-NEW-MESSAGE-TEXT'} as const)
export const updateMessageAC = (newMessageText: string) => ({
    type: 'UPDATE-NEW-MESSAGE-TEXT',
    newMessageText: newMessageText
} as const)

export const dialogsReducer = (state: messagesPageType, action: ActionsTypes) => {
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