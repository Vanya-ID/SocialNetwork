import React from 'react';
import d from '../Dialogs.module.css';


type MessageType = {
    message: string
}

const Message = (props: MessageType) => {
    const {message} = props

    return (
        <div className={d.message}>
            {message}
        </div>
    )
};

export default Message;