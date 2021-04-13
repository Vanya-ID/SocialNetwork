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

    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                <DialogItem name={dialogItems[0].name} id={dialogItems[0].id} />
                <DialogItem name={dialogItems[1].name} id={dialogItems[1].id} /></div>
            <div className={d.messages}>
                <Message message={messageItems[0].message }/>
                <Message message={messageItems[1].message }/>


            </div>
        </div>
    )
}

export default Dialogs;