import React, {ChangeEvent, useState} from "react";

type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}

const ProfileStatusHocks = (props: ProfileStatusType) => {

    const [editMode, setEditMode] = useState(false)

    return (
        <div>
            {!editMode &&
            <div>
                    <span onDoubleClick={() => {
                        setEditMode(true)
                    }
                    }>{props.status || '-----'}</span>
            </div>
            }
            {editMode &&
            <div>
                <input onBlur={() => {
                    setEditMode(false)
                }} autoFocus value={''} type="text"/>
            </div>
            }
        </div>
    )
}

export default ProfileStatusHocks;