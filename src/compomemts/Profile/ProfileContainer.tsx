import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profilePageReducer";
import {ReduxStoreType} from "../../redux/redux-store";
import {ProfileInfoType} from "./ProfileInfo/ProfileInfo";
import {RouteComponentProps, withRouter} from "react-router";
import {compose} from "redux";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";

type mapDispatchToPropsType = {
    getUserProfile: (userId: string | undefined) => void
    getStatus: (userId: string | undefined) => void
    updateStatus: (status: string) => void
}
type mapStateToPropsType = {
    profile: ProfileInfoType | null
    status: string
    authorizedUserId: number | null
    isAuth: boolean
}

type PathParamsType = {
    userId: string | undefined
}

type MapProfileContainerType = mapDispatchToPropsType & mapStateToPropsType

type PropsRouterType = RouteComponentProps<PathParamsType> & MapProfileContainerType

class ProfileContainer extends React.Component<PropsRouterType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId?.toString()
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return <Profile  {...this.props}
                         profile={this.props.profile}
                         status={this.props.status}
                         updateStatus={this.props.updateStatus}
        />
    }
}

let mapStateToProps = (state: ReduxStoreType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        getUserProfile,
        getStatus,
        updateStatus
    }),
    withRouter,
    WithAuthRedirect
)(ProfileContainer);