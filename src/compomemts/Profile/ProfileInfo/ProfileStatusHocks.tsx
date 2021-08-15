import React, {ChangeEvent, useEffect, useState} from "react";

type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}

const ProfileStatusHocks = (props: ProfileStatusType) => {
const {status, updateStatus} = props
    const [editMode, setEditMode] = useState(false)
    const [stateStatus, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(status)
    }, [status])

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
                    }>{stateStatus || '-----'}</span>
            </div>
            }
            {editMode &&
            <div>
                <input
                    onChange={onStatusChange}
                    onBlur={() => {
                        setEditMode(false)
                        updateStatus(stateStatus)
                    }}
                    autoFocus
                    value={stateStatus}
                    type="text"/>
            </div>
            }
        </div>
    )
}

export default ProfileStatusHocks;