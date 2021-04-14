import React from "react";
import p from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {profilePageType} from "../../redux/state";

type ProfileType= {
    profilePage: profilePageType
}

const Profile = (props:ProfileType ) => {
    return <div>
       <ProfileInfo />
        <MyPosts posts={props.profilePage.posts}/>
    </div>
}
export default Profile;