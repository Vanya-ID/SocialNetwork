import React from "react";
import p from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {profilePageType} from "../../redux/state";

type ProfileType= {
    profilePage: profilePageType
    addPost: (post: string)=> void
}

const Profile = (props:ProfileType ) => {
    return <div>
       <ProfileInfo />
        <MyPosts
            posts={props.profilePage.posts}
        addPost={props.addPost}
        />
    </div>
}
export default Profile;