import React from 'react';
import d from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                <div className={`${d.dialog} + ' " + ${d.active}`}>
                    Дима
                </div>
                <div className={d.dialog}>
                    Илья
                </div>
                <div className={d.dialog}>
                    Вика
                </div>
                <div className={d.dialog}>
                    Никита
                </div>
            </div>
            <div className={d.messages}>
                <div className={d.message}>Hi</div>
                <div className={d.message}> Hello</div>
                <div className={d.message}>Bye</div>
            </div>
        </div>
    )
}

export default Dialogs;