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

    let pagesCount = Math.ceil(500 / props.pageSize)

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <Paginator onPageChanged={props.onPageChanged} pageSize={props.pageSize}
                       totalUserCount={props.totalUserCount} currentPage={props.currentPage}/>
            {
                props.users.map((u: UserType) => <User key={u.id} user={u} follow={props.follow}
                                                       unfollow={props.unfollow}
                                                       followingInProgress={props.followingInProgress}
                    />
                )
            }
        </div>
    )
}
export default Users
