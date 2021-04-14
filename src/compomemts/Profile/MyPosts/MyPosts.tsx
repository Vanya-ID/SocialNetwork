import React from "react";
import p from './MyPosts.module.css';
import Post from "./Post/Post";
import {postItemsType} from "../../../redux/state";

type MyPostsType = {
    posts: Array<postItemsType>
}

const MyPosts = (props: MyPostsType) => {
let PostElements = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount}/>)
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