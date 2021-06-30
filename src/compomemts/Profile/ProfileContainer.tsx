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
}

type PathParamsType = {
    userId: string | undefined
}

type MapProfileContainerType = mapDispatchToPropsType & mapStateToPropsType

type PropsRouterType = RouteComponentProps<PathParamsType> & MapProfileContainerType

class ProfileContainer extends React.Component<PropsRouterType> {
    componentDidMount() {
        this.props.getUserProfile(this.props.match.params.userId)
        this.props.getStatus(this.props.match.params.userId)
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
        status: state.profilePage.status
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