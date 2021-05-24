import React, {KeyboardEvent, ChangeEvent} from "react";
import {ActionsTypes, postItemsType} from "../../../redux/state";
import {addPostAC, updateNewPostAC} from "../../../redux/profilePageReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {ReduxStoreType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

type mapStateToPropsType = {
    posts: Array<postItemsType>
    newPostText: string
}

type mapDispatchToPropsType = {
    changePostBody: (text: string)=> void
    addPost:( )=> void
}

export type MyPostsPropsType = mapStateToPropsType & mapDispatchToPropsType

let mapStateToProps = (state: ReduxStoreType):mapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {

    return {
        changePostBody: (text: string) => {
            dispatch(updateNewPostAC(text))
        },
        addPost: () => {
            dispatch(addPostAC())
        }
    }
}

const SuperMyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)

export default SuperMyPostsContainer;