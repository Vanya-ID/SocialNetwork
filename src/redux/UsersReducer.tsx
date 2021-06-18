import {ActionsTypes} from "./state";
import {usersAPI} from "../api/api";
import {Dispatch} from "redux";

export const followSuccess = (userId: number) => ({type: 'FOLLOW', userId} as const)
export const unfollowSuccess = (userId: number) => ({type: 'UNFOLLOW', userId} as const)
export const setUsers = (users: Array<UserType>) => ({type: 'SET-USER', users} as const)
export const setCurrentPage = (currentPage: number) => ({type: 'SET-CURRENT-PAGE', currentPage} as const)
export const setUsersTotalCount = (totalUsersCount: number) => ({
    type: 'SET-USERS-TOTAL-COUNT',
    totalUsersCount
} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: 'TOGGLE-IS-FETCHING', isFetching} as const)
export const toggleFollowingInProgress = (isFollowingInProgress: boolean, userId: number) => ({
    type: 'TOGGLE-FOLLOWING-PROGRESS',
    isFollowingInProgress, userId
} as const)

export  type UserType = {
    id: number
    followed: boolean
    name: string
    status: string
    /* location: {
         city: string
         country: string
     }
 */    photos: {
        small: string
        large: string
    }
}

export type initialUsersType = {
    users: Array<UserType>
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[] | []
}

let initialState: initialUsersType = {
    users: [],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

export const usersReducer = (state: initialUsersType = initialState, action: ActionsTypes): initialUsersType => {
    switch (action.type) {

        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }

        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }

        case "SET-USER": {
            return {...state, users: [...action.users]}
        }

        case 'SET-CURRENT-PAGE':
            return {...state, currentPage: action.currentPage}

        case 'SET-USERS-TOTAL-COUNT':
            return {...state, totalUserCount: action.totalUsersCount}

        case 'TOGGLE-IS-FETCHING':
            return {...state, isFetching: action.isFetching}

        case 'TOGGLE-FOLLOWING-PROGRESS':
            return {
                ...state,
                followingInProgress: action.isFollowingInProgress ?
                    [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)

            }

        default:
            return {...state}
    }
}

export const getUsers = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleIsFetching(true))
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items));
            dispatch(setUsersTotalCount(data.totalCount))
        });
    }
}
export const follow = (id: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleFollowingInProgress(true, id))
        usersAPI.follow(id).then(data => {
            if (data.resultCode === 0) {
                dispatch(toggleFollowingInProgress(false, id))
                dispatch(followSuccess(id))
            }
        });
    }
}
export const unfollow = (id: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleFollowingInProgress(true, id))
        usersAPI.unFollow(id)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unfollowSuccess(id))
                    dispatch(toggleFollowingInProgress(false, id))
                }
            })
    }
}
