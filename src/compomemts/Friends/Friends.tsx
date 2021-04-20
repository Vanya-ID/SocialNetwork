import React from 'react';
import f from './Friends.module.css'
import n from "../Navbar/Navbar.module.css";

const Friends = () => {
    return <div className={f.header}>
        <div className={f.name}><
            img className={n.friendsImage}
                src="https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg"
                alt="logo"/>
            <span>Sasha </span>

        </div>
        <div className={f.name}><
            img className={n.friendsImage}
                src="https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg"
                alt="logo"/>
            <span>Sasha </span>
        </div>

    </div>
}

export default Friends;
