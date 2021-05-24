import React from "react";
import p from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, profilePageType} from "../../redux/state";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type ProfileType = {
    profilePage: profilePageType
    dispatch: (action: ActionsTypes) => void
}

const Profile = () => {
    return <div>
        <ProfileInfo/>
        <MyPostsContainer
        />
    </div>
}
export default Profile;