import React from "react";
import um from './users.module.css';
import {UserType} from "../../redux/UsersReducer";
import {NavLink} from "react-router-dom";
import axios from "axios";

type UsersType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    onPageChanged: (pageNumber: number) => void
    users: Array<UserType>
    pageSize: number
    totalUserCount: number
    currentPage: number
}

let Users = (props: UsersType) => {

    let pagesCount = Math.ceil(100 / props.pageSize)

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p ? um.selectedPage : um.page}
                             onClick={() => (props.onPageChanged(p))}
                >{p}</span>
            })}
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
                            <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "eeb7dca6-bca0-43ec-ba8c-846900f182b4"
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unfollow(u.id)
                                        }
                                    });
                            }}>
                                UnFollow
                            </button>
                            :
                            <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "eeb7dca6-bca0-43ec-ba8c-846900f182b4"
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                    });
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
