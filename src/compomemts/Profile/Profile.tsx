import React from "react";
import p from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, profilePageType} from "../../redux/state";

type ProfileType = {
    profilePage: profilePageType
    dispatch: (action: ActionsTypes) => void
}

const Profile = (props: ProfileType) => {
    return <div>
        <ProfileInfo/>
        <MyPosts
            posts={props.profilePage.posts}
            newPostText={props.profilePage.newPostText}
            dispatch={props.dispatch}
        />
    </div>
}
export default Profile;