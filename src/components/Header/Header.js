import React from 'react';

import css from './Header.module.css'
import {Link, NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={css.Header}>
            <NavLink to="/">home</NavLink>
            <NavLink to="users">users</NavLink>
            <NavLink to="posts">posts</NavLink>
            <NavLink to="about">about</NavLink>
        </div>
    );
};

export {Header};