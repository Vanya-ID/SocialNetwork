import React from "react";
import p from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {profilePageType} from "../../redux/state";

type ProfileType = {
    profilePage: profilePageType
    addPost: () => void
    updatePostText: (newText: string) => void
}

const Profile = (props: ProfileType) => {
    return <div>
        <ProfileInfo/>
        <MyPosts
            posts={props.profilePage.posts}
            newPostText={props.profilePage.newPostText}
            addPost={props.addPost}
            updatePostText={props.updatePostText}
        />
    </div>
}
export default Profile;