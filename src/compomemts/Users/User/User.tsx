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

    return (
        <div>
                <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                        <img className={um.img} src={user.photos.small === null ?
                            'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1024px-User_icon_2.svg.png'
                            : user.photos.small} alt=""/>
                            </NavLink>
                    </div>
                    <div>
                        {user.followed ?
                            <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                                unfollow(user.id)
                            }}>
                                UnFollow
                            </button>
                            :
                            <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                                follow(user.id)
                            }}>
                                Follow
                            </button>
                        }
                                </div>
                                </span>
            <span>
                        <span>
                            <div>
                              {user.name}
                            </div>
                            <div>
                                {user.status}
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
