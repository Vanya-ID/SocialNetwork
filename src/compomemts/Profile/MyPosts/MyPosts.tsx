import React from "react";
import p from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={p.postBlovk}>
            <h3> my post</h3>
            <div>
                <div><textarea></textarea></div>
                <div>
                    <button>Add Post</button>
                </div>

            </div>
            <Post likeCount={50} message='Hello World'/>
            <Post likeCount={40} message='Move It'/>
        </div>
    )
};
export default MyPosts;