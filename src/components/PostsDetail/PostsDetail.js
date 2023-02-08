import React, {useEffect, useState} from 'react';

import {postService} from "../../services";
import {PostDetail} from "../PostDetail/PostDetail";

const PostsDetail =  ({postId,state}) => {
    const [post,setPost] = useState([]);

    useEffect(() => {
    if(state){
        setPost(state)
    } else {
        postService.getById(postId).then(({data}) => setPost(data))
    }
    },[postId])


    return (
        <div>
            <PostDetail post={post}/>
        </div>
    );
};


export {PostsDetail};