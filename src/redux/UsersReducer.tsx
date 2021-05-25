import {ActionsTypes} from "./state";

export const followAC = (userId: number) => ({type: 'FOLLOW', userId} as const)
export const unfollowtAC = (userId: number) => ({type: 'UNFOLLOW', userId} as const)
export const setUserAC = (user: UserType) => ({type: 'SET-USER', user} as const)

export  type UserType = {
    id: number
    followed: boolean
    fullName: string
    status: string
    location: {
        city: string
        country: string
    }
    photoURL : string
}

 type initialUsersType = {
    users: Array<UserType>
}

let initialState: initialUsersType = {
    users: [
        {
            id: 1,
            followed: true,
            fullName: 'Ivan',
            status: 'I am a boss ',
            location: {city: 'Minsk', country: 'Belarus'},
            photoURL:'https://vokrug.tv/pic/news/f/d/a/f/fdafa4953b333881d795aeac1b0e392a.jpg'
        },
        {
            id: 2,
            followed: true,
            fullName: 'Sasha',
            status: 'I am a boss ',
            location: {city: 'Kiev', country: 'Ukraine'},
            photoURL:'https://vokrug.tv/pic/news/f/d/a/f/fdafa4953b333881d795aeac1b0e392a.jpg'
        },
        {
            id: 3,
            followed: false,
            fullName: 'John',
            status: 'I am a boss ',
            location: {city: 'Grodno', country: 'Belarus'},
            photoURL:'https://vokrug.tv/pic/news/f/d/a/f/fdafa4953b333881d795aeac1b0e392a.jpg'
        },
    ]
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
            return {...state, users: [...state.users, action.user ]}
        default:
            return {...state}
    }
}