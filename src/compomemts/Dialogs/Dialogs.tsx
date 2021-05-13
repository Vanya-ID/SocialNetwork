import React, {ChangeEvent} from 'react';
import d from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from './Messaage/Message';
import {ActionsTypes, messagesPageType} from "../../redux/state";
import {updateMessageAC, sendMessageAC} from '../../redux/dialogsPageReducer';

type DialogsType = {
    dialogsPage: messagesPageType
    dispatch: (action: ActionsTypes) => void
}


const Dialogs = (props: DialogsType) => {
    debugger
    let DialogElements = props.dialogsPage.dialogs.map((d, i) =>
        <DialogItem key={i} name={d.name} id={d.id}/>)
    let MessageElements = props.dialogsPage.messages.map((m, i) =>
        <Message key={i} message={m.message}/>)

    const changeNewMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newText = e.currentTarget.value
        props.dispatch(updateMessageAC(newText))
    }
    const sendMessageOmClick = () => {
        props.dispatch(sendMessageAC())
    }

    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                {DialogElements}
            </div>
            <div className={d.messages}>
                <div>{MessageElements}</div>
                <div>
                    <div>
                    <textarea value={props.dialogsPage.newMessageText}
                              placeholder='Твой текст'
                              onChange={changeNewMessageText}
                    >

                </textarea>
                    </div>
                    <div>
                        <button onClick={sendMessageOmClick}>send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;