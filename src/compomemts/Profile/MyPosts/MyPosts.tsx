import React from "react";
import p from './MyPosts.module.css';
import Post from "./Post/Post";
import {postItems} from "../Profile";

const MyPosts = () => {

let PostElements = postItems.map(p => <Post message={p.message} likeCount={p.likeCount}/>)

    return (
        <div className={p.postBlovk}>
            <h3> my post</h3>
            <div>
                <div><textarea></textarea></div>
                <div>
                    <button>Add Post</button>
                </div>

            </div>
            {PostElements}
        </div>
    )
};
export default MyPosts;