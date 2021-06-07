import {ActionsTypes} from "./state";

export const followAC = (userId: number) => ({type: 'FOLLOW', userId} as const)
export const unfollowtAC = (userId: number) => ({type: 'UNFOLLOW', userId} as const)
export const setUsersAC = (users: Array<UserType>) => ({type: 'SET-USER', users} as const)
export const setCurrentPageAC = (currentPage: number) => ({type: 'SET-CURRENT-PAGE', currentPage} as const)
export const setUsersTotalCountAC = (totalUsersCount: number) => ({type: 'SET-USERS-TOTAL-COUNT', totalUsersCount} as const)

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
}

let initialState: initialUsersType = {
    users: [],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1
}

export const usersReducer = (state: initialUsersType = initialState, action: ActionsTypes) => {
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
            return {...state, users: [ ...action.users]}
        }
        case 'SET-CURRENT-PAGE':
            return {...state, currentPage: action.currentPage}
        case 'SET-USERS-TOTAL-COUNT':
            return {...state, totalUserCount: action.totalUsersCount}
        default:
            return {...state}
    }
}