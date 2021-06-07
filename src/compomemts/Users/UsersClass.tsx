import React from "react";
import {UserPropsType} from "./UsersContainer";
import axios from "axios";
import {UserType} from "../../redux/UsersReducer";
import um from './users.module.css';

class Users extends React.Component<UserPropsType> {

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

        let pagesCount = Math.ceil(100 / this.props.pageSize)

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return <div>
            {pages.map(p => {
                return <span className={this.props.currentPage === p ? um.selectedPage : um.page}
                             onClick={() => (this.onPageChanged(p))}
                >{p}</span>
            })}
            {
                this.props.users.map((u: UserType) => <div key={u.id}>
                <span>
                    <div>
                        <img className={um.img} src={u.photos.small === null ?
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