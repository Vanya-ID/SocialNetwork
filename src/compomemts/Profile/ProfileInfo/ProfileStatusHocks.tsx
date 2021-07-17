import React, {ChangeEvent, useState} from "react";

type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}

const ProfileStatusHocks = (props: ProfileStatusType) => {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

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
                <input
                    onChange={onStatusChange}
                    onBlur={() => {
                        setEditMode(false)
                        props.updateStatus(status)
                    }}
                    autoFocus
                    value={status}
                    type="text"/>
            </div>
            }
        </div>
    )
}

export default ProfileStatusHocks;