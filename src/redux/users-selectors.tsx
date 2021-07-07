import {ReduxStoreType} from "./redux-store";
import {createSelector} from "reselect";

const getUsersSelector = (state: ReduxStoreType) => {
    return state.userPage.users
}
export const getUsersRes = createSelector(getUsersSelector, (users) => {
    return users.filter(u => true)
})

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