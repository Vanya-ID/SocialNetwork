import React from "react";
import p from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return <div>
        <div>
            <img className={p.img}
                 src="https://i.pinimg.com/originals/28/1b/8f/281b8fabbeba08f50f14f68d13e6abbb.jpg" alt=""/>
        </div>
        <div>
            avatar + descr
        </div>
        <MyPosts/>
    </div>
}
export default Profile;