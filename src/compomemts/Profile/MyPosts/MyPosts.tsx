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
            <Post/>
            <Post/>
        </div>
    )
}
export default MyPosts;