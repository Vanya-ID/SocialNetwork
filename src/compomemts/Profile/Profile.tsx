import React from "react";
import p from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


export  let postItems  = [
    {likeCount: 12, message: 'Hello World'},
    {likeCount: 12, message: 'Move Itd'}
]

const Profile = () => {
    return <div>
       <ProfileInfo/>
        <MyPosts/>
    </div>
}
export default Profile;