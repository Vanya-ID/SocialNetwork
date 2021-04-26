import React,{KeyboardEvent} from "react";
import p from './MyPosts.module.css';
import Post from "./Post/Post";
import {postItemsType} from "../../../redux/state";

type MyPostsType = {
    posts: Array<postItemsType>
    addPost: () => void
    newPostText: string
    updatePostText: (newText: string) => void
}

const MyPosts = (props: MyPostsType) => {
    let PostElements = props.posts.map(p => <Post key={p.id} message={p.message} likeCount={p.likeCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {

        props.addPost()
    }
const addPostOnEnter = (e:KeyboardEvent<HTMLTextAreaElement>)=> {
    if (e.key==='Enter' && e.shiftKey ){
        addPost()
    }
}

    const onPostChange = () => {
        let text = newPostElement.current?.value;
        props.updatePostText(text ? text : '')
    }
    return (
        <div className={p.postBlovk}>
            <h3> my post</h3>
            <div>
                <div>
                    <textarea onKeyPress={addPostOnEnter}  onChange={onPostChange} value={props.newPostText} ref={newPostElement}/>
                </div>
                <div>
                    <button  onClick={addPost}>Add Post</button>
                </div>

            </div>
            {PostElements}
        </div>
    )
};
export default MyPosts;