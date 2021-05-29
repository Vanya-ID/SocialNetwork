import React from "react";
import {UserPropsType} from "./UsersContainer";
import axios from "axios";
import {UserType} from "../../redux/UsersReducer";

class Users extends React.Component<UserPropsType> {
    getUsers = () => {
        if (this.props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    this.props.setUser(response.data.items);
                });
        }
    }

    render() {
        return <div>
            <button onClick={this.getUsers}>Get Users</button>
            {
                this.props.users.map((u: UserType) => <div key={u.id}>
                <span>
                    <div>
                        <img style={{
                            width: '150px',
                            height: '150px'
                        }} src={u.photos.small === null ?
                            'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1024px-User_icon_2.svg.png'
                            : u.photos.small} alt=""/>
                    </div>
                    <div>
                        {u.followed ?
                            <button onClick={() => {
                                this.props.unfollow(u.id)
                            }}>
                                UnFollow
                            </button>
                            :
                            <button onClick={() => {
                                this.props.follow(u.id)
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
        </div>;
    }
}

export default Users