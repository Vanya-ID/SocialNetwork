import React, {KeyboardEvent, ChangeEvent} from "react";
import p from './MyPosts.module.css';
import Post from "./Post/Post";
import {ActionsTypes, postItemsType} from "../../../redux/state";


type MyPostsType = {
    posts: Array<postItemsType>
    dispatch: (action:ActionsTypes) => void
    newPostText: string
}

const MyPosts = (props: MyPostsType) => {
    let PostElements = props.posts.map(p => <Post key={p.id} message={p.message} likeCount={p.likeCount}/>)

    // let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        props.dispatch({type: "ADD-POST"})
    }

    const addPostOnEnter = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && e.shiftKey) {
            addPost()
        }
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch({type:'UPDATE-NEW-POST-TEXT',newText:e.currentTarget.value})
    }

    return (
        <div className={p.postBlovk}>
            <h3> my post</h3>
            <div>
                <div>
                    <textarea onKeyPress={addPostOnEnter} onChange={onPostChange} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add Post</button>
                </div>

            </div>
            {PostElements}
        </div>
    )
};
export default MyPosts;