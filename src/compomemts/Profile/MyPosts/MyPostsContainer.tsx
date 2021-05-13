import React, {KeyboardEvent, ChangeEvent} from "react";
import {ActionsTypes, postItemsType} from "../../../redux/state";
import {addPostAC, updateNewPostAC} from "../../../redux/profilePageReducer";
import MyPosts from "./MyPosts";

type MyPostsTypeContainer = {
    posts: Array<postItemsType>
    dispatch: (action: ActionsTypes) => void
    newPostText: string
}

const MyPostsContainer = (props: MyPostsTypeContainer) => {
    const addPost = () => {
        props.dispatch(addPostAC())
    }

    const onPostChange = (text: string) => {
        props.dispatch(updateNewPostAC(text))
    }

    return (
        <MyPosts
            newPostText={props.newPostText}
            onPostChange={onPostChange}
            addPost={addPost}
            posts={props.posts}/>
    )
};
export default MyPostsContainer;