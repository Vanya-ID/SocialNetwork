import React from 'react';
import {NavLink} from 'react-router-dom';
import d from '../Dialogs.module.css';

type DialogItemType = {
    id: number
    name: string
}


const DialogItem = (props:DialogItemType) => {
    let path = "/dialogs/" +props.id;
    return (
        <div  className={d.dialog}>
            <NavLink  className={d.dialogElement} to={path}>
                {props.name}
            </NavLink>
        </div>
    )
};

export  default  DialogItem;



