import React, {KeyboardEvent, ChangeEvent} from "react";
import {ActionsTypes, postItemsType} from "../../../redux/state";
import {addPostAC, updateNewPostAC} from "../../../redux/profilePageReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {ReduxStoreType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

type mapStateToPropsType = {
    posts: Array<postItemsType>
}

type mapDispatchToPropsType = {
    addPost: (text: string) => void
}

export type MyPostsPropsType = mapStateToPropsType & mapDispatchToPropsType

let mapStateToProps = (state: ReduxStoreType): mapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
    }
}
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addPost: (text) => {
            dispatch(addPostAC(text))
        }
    }
}

const SuperMyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default SuperMyPostsContainer;