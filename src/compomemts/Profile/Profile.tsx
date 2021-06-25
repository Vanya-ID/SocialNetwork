import React from "react";
import ProfileInfo, {ProfileInfoType} from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {Redirect} from "react-router";


type ProfilePropsType = {
    profile: ProfileInfoType | null
    status: string
    updateStatus: (status: string ) => void
}

const Profile = (props: ProfilePropsType) => {
    return <div>
        <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
        <MyPostsContainer
        />
    </div>
}
export default Profile;