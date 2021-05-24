import React, {KeyboardEvent, ChangeEvent} from "react";
import p from './MyPosts.module.css';
import Post from "./Post/Post";
import {ActionsTypes, postItemsType} from "../../../redux/state";
import {MyPostsPropsType} from "./MyPostsContainer";

type MyPostsType = {
    posts: Array<postItemsType>
    onPostChange: (title: string) => void
    addPost: () => void
    newPostText: string
}

const MyPosts = (props: MyPostsPropsType) => {
    let PostElements = props.posts.map(p => <Post key={p.id} message={p.message} likeCount={p.likeCount}/>)

    // let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        props.addPost()
    }

    const addPostOnEnter = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && e.shiftKey) {
            addPost()
        }
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.changePostBody(text)
    }

    return (
        <div className={p.postBlovk}>
            <h3> my post</h3>
            <div>
                <div>
                    <textarea
                        onKeyPress={addPostOnEnter}
                        onChange={onPostChange}
                        value={props.newPostText}/>
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