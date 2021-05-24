import React, {ChangeEvent, KeyboardEvent} from 'react';
import d from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from './Messaage/Message';
import {ActionsTypes, messagesPageType} from "../../redux/state";
import {DialogsPropsType} from "./DialogsContainer";

type DialogsType = {
    dialogsPage: messagesPageType
    sendMessageOmClick: () => void
    changeNewMessageText: (newText: string) => void
}


const Dialogs = (props: DialogsPropsType) => {
    let DialogElements = props.dialogsPage.dialogs.map((d, i) =>
        <DialogItem key={i} name={d.name} id={d.id}/>)
    let MessageElements = props.dialogsPage.messages.map((m, i) =>
        <Message key={i} message={m.message}/>)

    const changeNewMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newText = e.currentTarget.value
        props.changeMessageBody(newText)
    }
    const sendMessageOnClick = () => {
        props.sendMessageOnClick()
    }
    const sendMessageOmEnter = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            sendMessageOnClick()
        }
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
                    <textarea
                        value={props.dialogsPage.newMessageText}
                        placeholder='Твой текст'
                        onChange={changeNewMessageText}
                        onKeyPress={sendMessageOmEnter}
                    >

                </textarea>
                    </div>
                    <div>
                        <button onClick={sendMessageOnClick}>send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;