import React from "react";
import um from '../users.module.css';
import {NavLink} from "react-router-dom";
import {UserType} from "../../../redux/UsersReducer";

type SeparateUser = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    followingInProgress: number[] | []
    user: UserType
}

let User = ({user, followingInProgress, unfollow, follow}: SeparateUser) => {
    let u = user

    return (
        <div>
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
                            <button disabled={followingInProgress.some(id => id === u.id)} onClick={() => {
                                unfollow(u.id)
                            }}>
                                UnFollow
                            </button>
                            :
                            <button disabled={followingInProgress.some(id => id === u.id)} onClick={() => {
                                follow(u.id)
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
        </div>
    )
}
export default User
