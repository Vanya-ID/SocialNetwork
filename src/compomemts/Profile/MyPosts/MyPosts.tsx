import React from "react";
import p from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            my post
            <div>
                <textarea></textarea>
                <button>Add Post</button>
            </div>
            <Post likeCount={50 } message='Hello World'/>
            <Post likeCount={40 } message='Move It'/>
        </div>
    )
};
export default MyPosts;