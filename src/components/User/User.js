import React from 'react';
import {useDispatch} from "react-redux";
import {userActions} from "../../redux";

const User = ({user}) => {
    const dispatch = useDispatch();
    const {id,name,username} = user;
    return (
        <div>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>username:{username}</div>
            <button onClick={()=> dispatch(userActions.setSelectedUser(user))}>select</button>
            <button onClick={()=> dispatch(userActions.getById({id}))}>Api Select</button>
        </div>
    );
}

export {User};