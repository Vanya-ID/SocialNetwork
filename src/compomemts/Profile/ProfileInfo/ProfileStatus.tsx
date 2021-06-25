import React, {ChangeEvent} from "react";

type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}

class ProfileStatus extends React.Component<ProfileStatusType> {

    state = {
        editMode: false,
        status: this.props.status
    }

    toggleEditMode = () => {
        this.setState({
            editMode: !this.state.editMode
        });
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return <>
            {!this.state.editMode &&
            <div>
                <span onDoubleClick={this.toggleEditMode}>
                my status : {this.props.status || 'no status'}
            </span>
            </div>
            }
            {this.state.editMode &&
            <div>
            <span>
                <input
                    onChange={this.onStatusChange}
                    onBlur={this.toggleEditMode} autoFocus value={this.state.status} type="text"/>
            </span>
            </div>
            }

        </>
    }
}

export default ProfileStatus;