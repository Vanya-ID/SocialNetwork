import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profilePageReducer";
import {ReduxStoreType} from "../../redux/redux-store";
import {ProfileInfoType} from "./ProfileInfo/ProfileInfo";
import {Redirect, RouteComponentProps, withRouter} from "react-router";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";

type mapDispatchToPropsType = {
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

let AuthRedirectComponent = WithAuthRedirect(ProfileContainer)

let mapStateToProps = (state: ReduxStoreType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
    }
}

let WithURLDataContainerComponent = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, {
    getUserProfile
})(WithURLDataContainerComponent);