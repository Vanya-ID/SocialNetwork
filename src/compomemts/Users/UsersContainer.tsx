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
import axios from "axios";
import Users from "./Users";

type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUser: (user: Array<UserType>) => void
    setCurrentPage: (page: number) => void
    setTotalCount: (totalCount: number) => void
}

type mapStateToPropsType = initialUsersType

export type UserPropsType = mapStateToPropsType & mapDispatchToPropsType

class UsersAPIComponent extends React.Component<UserPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUser(response.data.items);
                this.props.setTotalCount(response.data.totalCount)
            });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUser(response.data.items);
            });
    }

    render() {
        return <Users
            users={this.props.users}
            pageSize={this.props.pageSize}
            totalUserCount={this.props.totalUserCount}
            currentPage={this.props.currentPage}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            onPageChanged={this.onPageChanged}
        />
    }
}


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

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);