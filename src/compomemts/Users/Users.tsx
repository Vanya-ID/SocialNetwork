import React from "react";
import um from './users.module.css';
import {UserType} from "../../redux/UsersReducer";
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";

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
                props.users.map((u: UserType) => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                        <img className={um.img} src={u.photos.small === null ?
                            'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1024px-User_icon_2.svg.png'
                            : u.photos.small} alt=""/>
                            </NavLink>
                    </div>
                    <div>
                        {u.followed ?
                            <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.unfollow(u.id)
                            }}>
                                UnFollow
                            </button>
                            :
                            <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.follow(u.id)
                            }}>
                                Follow
                            </button>
                        }
                                </div>
                                </span>
                    <span>
                        <span>
                            <div>
                              {u.name}
                            </div>
                            <div>
                                {u.status}
                            </div>
                        </span>
                        <span>
                            <div>
                                {'u.location.country'}
                            </div>
                            <div>
                                {'u.location.city'}
                            </div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}
export default Users
