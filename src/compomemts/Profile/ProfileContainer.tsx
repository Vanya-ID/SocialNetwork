import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profilePageReducer";
import {ReduxStoreType} from "../../redux/redux-store";

type mapDispatchToPropsType = {
    setUserProfile: (userProfile: number) => void
}
type mapStateToPropsType = {
    profile: any
}

type ProfileContainerType = mapDispatchToPropsType & mapStateToPropsType

class ProfileContainer extends React.Component<ProfileContainerType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                debugger
                this.props.setUserProfile(response.data)
            });
    }

    render() {
        return <Profile  {...this.props} profile={this.props.profile}/>
    }
}

let mapStateToProps = (state: ReduxStoreType) : mapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}

export default connect(mapStateToProps, {
    setUserProfile
})(ProfileContainer);