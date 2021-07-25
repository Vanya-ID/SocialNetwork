import React from "react";
import p from './MyPosts.module.css';
import Post from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, requiresField} from "../../../utils/validatos";
import {Textarea} from "../../common/Forms/Forms";

class MyPosts extends React.Component<MyPostsPropsType> {
    render() {
        let PostElements = this.props.posts.map(p => <Post key={p.id} message={p.message} likeCount={p.likeCount}/>)

        const addPost = (value: MyPostsFormType) => {
            this.props.addPost(value.newPostText)
        }

        return (
            <div className={p.postBlovk}>
                <h3> my post</h3>
                <MyReduxPostsForm onSubmit={addPost}/>
                {PostElements}
            </div>
        )
    }
}

type MyPostsFormType = {
    newPostText: string
}

const maxLength10 = maxLengthCreator(10)

const MyPostsForm: React.FC<InjectedFormProps<MyPostsFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    placeholder={'Your text'}
                    name={'newPostText'}
                    component={Textarea}
                    validate={[requiresField, maxLength10]}
                />
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