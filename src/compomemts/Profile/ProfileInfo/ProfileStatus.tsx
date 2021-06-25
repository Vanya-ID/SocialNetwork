import React from "react";

type ProfileStatusType = {
    status: string
}

class ProfileStatus extends React.Component<ProfileStatusType> {

    state = {
        editMode: false
    }

    toggleEditMode  ()  {
        this.setState({
            editMode: !this.state.editMode
        })
    }

    render() {
        return <>
            {!this.state.editMode &&
            <div>
            <span onDoubleClick={this.toggleEditMode.bind(this)}>
                {this.props.status}
            </span>
            </div>
            }
            {this.state.editMode &&
            <div>
            <span>
                <input onBlur={this.toggleEditMode.bind(this)} autoFocus value={this.props.status} type="text"/>
            </span>
            </div>
            }

        </>
    }
}

export default ProfileStatus;