import React from "react";
import p from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return <div >
        <div>
            <img className={p.img}
                 src="https://i.pinimg.com/originals/28/1b/8f/281b8fabbeba08f50f14f68d13e6abbb.jpg" alt=""/>
        </div>
        <div className={p.avatarBlock}>
            avatar + descr
        </div>
    </div>
}
export default ProfileInfo;