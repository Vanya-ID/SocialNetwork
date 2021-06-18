import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {getUserProfile, setUserProfile} from "../../redux/profilePageReducer";
import {ReduxStoreType} from "../../redux/redux-store";
import {ProfileInfoType} from "./ProfileInfo/ProfileInfo";
import {RouteComponentProps, withRouter} from "react-router";

type mapDispatchToPropsType = {
    setUserProfile: (userProfile: number) => void
    getUserProfile: (userId: string | undefined) => void
}
type mapStateToPropsType = {
    profile: ProfileInfoType | null
}

type PathParamsType = {
    userId: string | undefined
}

type MapProfileContainerType = mapDispatchToPropsType & mapStateToPropsType

type PropsRouterType = RouteComponentProps<PathParamsType> & MapProfileContainerType

class ProfileContainer extends React.Component<PropsRouterType> {
    componentDidMount() {
        this.props.getUserProfile(this.props.match.params.userId)
    }

    render() {
        return <Profile  {...this.props} profile={this.props.profile}/>
    }
}

let mapStateToProps = (state: ReduxStoreType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}

let WithURLDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
    setUserProfile,
    getUserProfile
})(WithURLDataContainerComponent);