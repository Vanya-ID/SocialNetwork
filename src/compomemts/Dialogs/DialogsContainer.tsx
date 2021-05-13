import React, {ChangeEvent, KeyboardEvent} from 'react';
import {ActionsTypes, messagesPageType} from "../../redux/state";
import {updateMessageAC, sendMessageAC} from '../../redux/dialogsPageReducer';
import Dialogs from "./Dialogs";

type DialogsType = {
    dialogsPage: messagesPageType
    dispatch: (action: ActionsTypes) => void
}


const DialogsContainer = (props: DialogsType) => {

    const changeNewMessageText = (newText:string) => {
        props.dispatch(updateMessageAC(newText))
    }
    const sendMessageOmClick = () => {
        props.dispatch(sendMessageAC())
    }

    return (
    <Dialogs
        sendMessageOmClick={sendMessageOmClick}
        dialogsPage={props.dialogsPage}
        changeNewMessageText={changeNewMessageText}
        />
    )
}

export default DialogsContainer;