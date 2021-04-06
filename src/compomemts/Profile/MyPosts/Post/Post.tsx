import React from "react";
import p from './Post.module.css';

type PostType ={
    message: string
    likeCount: number
}

const Post = (props: PostType) => {
    return <div className={p.item}>
        <img src="https://www.meme-arsenal.com/memes/fd51570fb8df5c3bde2532971bf8df80.jpg"
            alt="AVATAR"/>
        {props.message}
        <div>
        <span>{props.likeCount} Like</span>
        </div>
    </div>

}
export default Post;