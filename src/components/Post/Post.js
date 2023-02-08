import React from 'react';
import {useNavigate} from "react-router-dom"


const Post = ({post}) => {
    let navigate = useNavigate();
    const {id, userId, title} = post;
    return (
        <div>
            <div>id:{id}</div>
            <div>userId:{userId}</div>
            <div>title:{title}</div>
            <button onClick={() => navigate(id.toString(), {state: post})}>Post Details</button>
        </div>
    );
};

export {Post};