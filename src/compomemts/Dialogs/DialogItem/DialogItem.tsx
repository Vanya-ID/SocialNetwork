import React from 'react';
import {NavLink} from 'react-router-dom';
import { DialogItemType } from '../Dialogs';
import d from '../Dialogs.module.css';


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



