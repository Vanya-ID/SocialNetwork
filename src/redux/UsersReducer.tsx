import {ActionsTypes} from "./state";

export const followAC = (userId: number) => ({type: 'FOLLOW', userId} as const)
export const unfollowtAC = (userId: number) => ({type: 'UNFOLLOW', userId} as const)
export const setUsersAC = (users: Array<UserType>) => ({type: 'SET-USER', users} as const)

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

type initialUsersType = {
    users: Array<UserType>
}

let initialState: initialUsersType = {
    users: []
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

        case "SET-USER":
            return {...state, users: [...state.users, ...action.users]}
        default:
            return {...state}
    }
}