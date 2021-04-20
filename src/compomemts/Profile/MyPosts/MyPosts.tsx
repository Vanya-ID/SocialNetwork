import React from "react";
import p from './MyPosts.module.css';
import Post from "./Post/Post";
import {postItemsType} from "../../../redux/state";

type MyPostsType = {
    posts: Array<postItemsType>
}

const MyPosts = (props: MyPostsType) => {
    let PostElements = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {

        let text = newPostElement.current?.value;
        console.log(text)
    }
    return (
        <div className={p.postBlovk}>
            <h3> my post</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
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