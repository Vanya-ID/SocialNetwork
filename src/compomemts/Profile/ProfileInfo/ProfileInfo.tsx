import React, {ReactNode} from "react";
import p from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/Preloader";

type ProfileInfoType = {
    profile: any
}


const ProfileInfo = (props: ProfileInfoType) => {

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
            avatar + descr
        </div>
    </div>
}
export default ProfileInfo;