import {ReduxStoreType} from "./redux-store";

export const getUsersSelect = (state: ReduxStoreType) => {
    return state.userPage.users
}

export const getPageSize = (state: ReduxStoreType) => {
    return state.userPage.pageSize
}

export const getTotalUserCount = (state: ReduxStoreType) => {
    return state.userPage.totalUserCount
}
export const getCurrentPage = (state: ReduxStoreType) => {
    return state.userPage.currentPage
}
export const getIsFetching = (state: ReduxStoreType) => {
    return state.userPage.isFetching
}
export const getFollowingInProgress = (state: ReduxStoreType) => {
    return state.userPage.followingInProgress
}