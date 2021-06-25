import React, {ReactNode} from "react";
import p from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

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
    updateStatus: (status: string ) => void
}


const ProfileInfo = (props: ProfileInfoPropsType) => {

    if (!props.profile) {
        return <Preloader/>
    }
    return <div>
        <div>
            <img className={p.img}
                 src="https://i.pinimg.com/originals/28/1b/8f/281b8fabbeba08f50f14f68d13e6abbb.jpg" alt=""/>
        </div>
        <div className={p.avatarBlock}>
            <img src={props.profile?.photos?.large} alt={'Logo'}/>
            <ProfileStatus
                updateStatus={props.updateStatus}
                status={props.status}
                />
        </div>
    </div>
}
export default ProfileInfo;