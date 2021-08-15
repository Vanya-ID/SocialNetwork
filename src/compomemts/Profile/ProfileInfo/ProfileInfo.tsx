import React from "react";
import p from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/Preloader";
import ProfileStatusHocks from "./ProfileStatusHocks";

export type ProfileInfoType = {
    aboutMe: string
    contacts: {
        facebook: string
        github: string
        instagram: string
        vk: string
    }
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    photos: {
        large: string
        small: string
    }
    userId: number
}

type ProfileInfoPropsType = {
    profile: ProfileInfoType | null
    status: string
    updateStatus: (status: string) => void
}


const ProfileInfo = (props: ProfileInfoPropsType) => {
    const {profile, status, updateStatus} = props

    if (!props.profile) {
        return <Preloader/>
    }
    return <div>

        <div className={p.avatarBlock}>
            <img src={profile?.photos?.large} alt={'Logo'}/>
            <ProfileStatusHocks
                updateStatus={updateStatus}
                status={status}
            />
        </div>
    </div>
}
export default ProfileInfo;