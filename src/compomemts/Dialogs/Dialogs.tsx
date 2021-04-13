import React from 'react';
import d from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from './Messaage/Message';

 export  type DialogItemType= {
    name: string
    id: number
}

const Dialogs = () => {
    let dialogItems =[
        {id:1, name :" Dima"},
        {id:2, name :" Андрей"},
        {id:3, name :" Влад"},
        {id:41, name :" Вика"}
    ]
    let messageItems =[
        {id:1, message:" HI"},
        {id:2, message :" Hello"},
        {id:3, message :" Like"}
    ]

let DialogElements = dialogItems.map(d =><DialogItem name={d.name} id={d.id}/> )
let MessageElements = messageItems.map(m=> <Message message={m.message}/> )


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