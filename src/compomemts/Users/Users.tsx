import React from "react";
import {UserType} from "../../redux/UsersReducer";
import Paginator from "../common/Paginator/Paginator";
import User from "./User/User";

type UsersType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    onPageChanged: (pageNumber: number) => void
    followingInProgress: number[] | []
    users: Array<UserType>
    pageSize: number
    totalUserCount: number
    currentPage: number
}

let Users = (props: UsersType) => {
    const {onPageChanged, totalUserCount, pageSize, currentPage, follow, unfollow, followingInProgress} = props

    return (
        <div>
            <Paginator onPageChanged={onPageChanged} pageSize={pageSize}
                       totalUserCount={totalUserCount} currentPage={currentPage}/>
            {
                props.users.map((u: UserType) => <User key={u.id} user={u} follow={follow}
                                                       unfollow={unfollow}
                                                       followingInProgress={followingInProgress}
                    />
                )
            }
        </div>
    )
}
export default Users
