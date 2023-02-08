import React from 'react';
import {Outlet} from "react-router-dom";

import {Posts} from "../../components/Posts/Posts";

import css from './PostPage.module.css'

const PostsPage = () => {
    return (
        <div className={css.page}>
            <div><Posts/></div>
            <div className={css.post}><Outlet/></div>
        </div>
    );
};

export {PostsPage};