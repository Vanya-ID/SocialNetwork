import React, {ChangeEvent} from 'react';
import d from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from './Messaage/Message';
import {ActionsTypes, messagesPageType, updateMessageAC, sendMessageAC} from "../../redux/state";

type DialogsType = {
    dialogsPage: messagesPageType
    dispatch: (action: ActionsTypes) => void
}


const Dialogs = (props: DialogsType) => {

    let DialogElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let MessageElements = props.dialogsPage.messages.map(m => <Message message={m.message}/>)

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