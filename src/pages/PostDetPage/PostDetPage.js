import React from 'react';
import {useLocation, useParams} from "react-router-dom";

import {PostsDetail} from "../../components/PostsDetail/PostsDetail";

const PostDetPage = () => {
    const {postId} = useParams();
    let {state} = useLocation();

    return (
        <div>
            <PostsDetail postId={postId} state={state}/>
        </div>
    );
};

export {PostDetPage};