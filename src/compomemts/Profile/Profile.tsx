import React from "react";
import ProfileInfo, {ProfileInfoType} from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {Redirect} from "react-router";


type ProfilePropsType = {
    profile: ProfileInfoType | null
}

const Profile = (props: ProfilePropsType) => {
    return <div>
        <ProfileInfo profile={props.profile}/>
        <MyPostsContainer
        />
    </div>
}
export default Profile;