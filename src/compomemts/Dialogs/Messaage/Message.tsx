import React from 'react';
import d from '../Dialogs.module.css';


type MessageType ={
    message: string
}

const Message =(props:MessageType) =>{
    return(
        <div className={d.message}>
            {props.message}
        </div>
    )
};

export default  Message;