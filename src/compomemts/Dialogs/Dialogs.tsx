import React from 'react';
import {NavLink} from 'react-router-dom';
import d from './Dialogs.module.css';

const DialogItem = (props:any) => {
    let path = "/dialogs/" +props.id;
    return (
        <div  className={`${d.dialog} + ' " + ${d.active}`}>
            <NavLink to={path}>
                {props.name}
            </NavLink>
        </div>
    )
};

const Message =(props:any) =>{
    return(
        <div className={d.message}>{props.message}</div>
    )
};

const Dialogs = () => {
    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                <DialogItem name="Дима" id="1" />
                <DialogItem name="Андрей" id="2" />
                <DialogItem name="Влад" id="3" />
                <DialogItem name="Вика" id="4" />
            </div>
            <div className={d.messages}>
                <Message message="HI" />
                <Message message="Hello" />
                <Message message="Like" />

            </div>
        </div>
    )
}

export default Dialogs;