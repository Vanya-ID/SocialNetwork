import React from "react";
import p from './MyPosts.module.css';
import Post from "./Post/Post";
import {postItemsType} from "../../../redux/state";
import {MyPostsPropsType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type MyPostsType = {
    posts: Array<postItemsType>
    onPostChange: (title: string) => void
    addPost: () => void
    newPostText: string
}

const MyPosts = (props: MyPostsPropsType) => {
    let PostElements = props.posts.map(p => <Post key={p.id} message={p.message} likeCount={p.likeCount}/>)

    const addPost = (value: MyPostsFormType) => {
        props.addPost(value.newPostText)
    }

    return (
        <div className={p.postBlovk}>
            <h3> my post</h3>
            <MyReduxPostsForm onSubmit={addPost}/>
            {PostElements}
        </div>
    )
};

type MyPostsFormType = {
    newPostText: string
}

const MyPostsForm: React.FC<InjectedFormProps<MyPostsFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Your text'} name={'newPostText'} component={'textarea'}/>
            </div>
            <div>
                <button>Add Post</button>
            </div>
        </form>
    )
}

const MyReduxPostsForm = reduxForm<MyPostsFormType>({
    form: 'postsForm'
})(MyPostsForm)

export default MyPosts;