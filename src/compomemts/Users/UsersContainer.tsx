import React from "react";
import {connect} from "react-redux";
import {ReduxStoreType} from "../../redux/redux-store";
import {
    follow,
    initialUsersType,
    setCurrentPage,
    setUsers,
    setUsersTotalCount, toggleFollowingInProgress,
    toggleIsFetching,
    unfollow,
    UserType
} from "../../redux/UsersReducer";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import {usersAPI} from "../../api/api";

type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (user: Array<UserType>) => void
    setCurrentPage: (page: number) => void
    setUsersTotalCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingInProgress: (isFollowingInProgress: boolean, userId: number) => void
}

type mapStateToPropsType = initialUsersType

export type UserPropsType = mapStateToPropsType & mapDispatchToPropsType

class UsersAPIComponent extends React.Component<UserPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items);
            this.props.setUsersTotalCount(data.totalCount)
        });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items);
        });
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/>
                :
                <Users
                    users={this.props.users}
                    pageSize={this.props.pageSize}
                    totalUserCount={this.props.totalUserCount}
                    currentPage={this.props.currentPage}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    onPageChanged={this.onPageChanged}
                    toggleFollowingInProgress={this.props.toggleFollowingInProgress}
                    followingInProgress={this.props.followingInProgress}
                />}

        </>
    }
}


let mapStateToProps = (state: ReduxStoreType): mapStateToPropsType => {
    return {
        users: state.userPage.users,
        pageSize: state.userPage.pageSize,
        totalUserCount: state.userPage.totalUserCount,
        currentPage: state.userPage.currentPage,
        isFetching: state.userPage.isFetching,
        followingInProgress: state.userPage.followingInProgress
    }
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setUsersTotalCount,
    toggleIsFetching,
    toggleFollowingInProgress
})(UsersAPIComponent);