import React from 'react';
import d from '../Dialogs.module.css';


type MessageType ={
    message: string
}

const Message =(props:MessageType) =>{
    let newMessageRef = React.createRef<HTMLTextAreaElement>()

    const addMessage =( )=>{
        console.log(newMessageRef.current?.value)
    }
    return(
        <div className={d.message}>
            {props.message}
            <textarea ref={newMessageRef}></textarea>
            <button onClick={addMessage}>Add Message</button>
        </div>
    )
};

export default  Message;