import React from "react";
import p from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {

    let postItems = [
        {likeCount: 12, message: 'Hello World'},
        {likeCount: 12, message: 'Move Itd'}
    ]

    return (
        <div className={p.postBlovk}>
            <h3> my post</h3>
            <div>
                <div><textarea></textarea></div>
                <div>
                    <button>Add Post</button>
                </div>

            </div>
            <Post likeCount={postItems[0].likeCount} message={postItems[0].message}/>
            <Post likeCount={postItems[1].likeCount} message={postItems[1].message}/>
        </div>
    )
};
export default MyPosts;