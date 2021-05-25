import React from "react";
import {UserPropsType} from "./UsersContainer";

let Users = (props: UserPropsType) => {
    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img style={{
                            width: '150px',
                            height: '150px'
                        }} src={u.photoURL} alt=""/>
                    </div>
                    <div>
                        {u.followed ?
                            <button onClick={() => {
                                props.unfollow(u.id)
                            }}>
                                UnFollow
                            </button>
                            :
                            <button onClick={() => {
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
                                {u.fullName}
                            </div>
                            <div>
                                {u.status}
                            </div>
                        </span>
                        <span>
                            <div>
                                {u.location.country}
                            </div>
                            <div>
                                {u.location.city}
                            </div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}
export default Users;