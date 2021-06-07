import React from "react";
import {connect} from "react-redux";
import {ReduxStoreType} from "../../redux/redux-store";
import {
    followAC,
    initialUsersType,
    setCurrentPageAC,
    setUsersAC,
    setUsersTotalCountAC,
    unfollowtAC,
    UserType
} from "../../redux/UsersReducer";
import {Dispatch} from "redux";
import UsersClass from "./UsersClass";

type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUser: (user: Array<UserType>) => void
    setCurrentPage: (page: number) => void
    setTotalCount: (totalCount: number) => void
}

type mapStateToPropsType = initialUsersType

export type UserPropsType = mapStateToPropsType & mapDispatchToPropsType

let mapStateToProps = (state: ReduxStoreType): mapStateToPropsType => {
    return {
        users: state.userPage.users,
        pageSize: state.userPage.pageSize,
        totalUserCount: state.userPage.totalUserCount,
        currentPage: state.userPage.currentPage
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
        setUser: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (page: number) => {
            dispatch(setCurrentPageAC(page))
        },
        setTotalCount: (totalCount: number) => {
            dispatch(setUsersTotalCountAC(totalCount))
        },

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersClass);