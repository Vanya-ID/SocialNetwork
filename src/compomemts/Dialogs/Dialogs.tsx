import React from 'react';
import d from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from './Messaage/Message';
import {messagesPageType} from "../../redux/state";

   type DialogsType = {
     dialogsPage: messagesPageType
}


const Dialogs = (props :DialogsType) => {

let DialogElements = props.dialogsPage.dialogs.map(d =><DialogItem name={d.name} id={d.id}/> )
let MessageElements = props.dialogsPage.messages.map(m=> <Message message={m.message}/> )


    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                {DialogElements}
            </div>
            <div className={d.messages}>
                {MessageElements}
            </div>
        </div>
    )
}

export default Dialogs;