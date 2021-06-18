import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profilePageReducer";
import {ReduxStoreType} from "../../redux/redux-store";
import {ProfileInfoType} from "./ProfileInfo/ProfileInfo";
import {Redirect, RouteComponentProps, withRouter} from "react-router";

type mapDispatchToPropsType = {
    getUserProfile: (userId: string | undefined) => void
}
type mapStateToPropsType = {
    profile: ProfileInfoType | null
    isAuth: boolean
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

        if (!this.props.isAuth) return <Redirect to={'/login'}/>

        return <Profile  {...this.props} profile={this.props.profile}/>
    }
}

let mapStateToProps = (state: ReduxStoreType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}

let WithURLDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
    getUserProfile
})(WithURLDataContainerComponent);