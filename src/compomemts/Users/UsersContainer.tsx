import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {ReduxStoreType} from "../../redux/redux-store";
import {followAC, setUserAC, unfollowtAC, UserType} from "../../redux/UsersReducer";
import {Dispatch} from "redux";

type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUser: (user: UserType) => void
}

type mapStateToPropsType = {
    users: Array<UserType>
}

export type UserPropsType = mapStateToPropsType & mapDispatchToPropsType

let mapStateToProps = (state: ReduxStoreType): mapStateToPropsType => {
    return {
        users: state.userPage.users
    }
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowtAC(userId))
        },
        setUser: (user) => {
            dispatch(setUserAC(user))

        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);