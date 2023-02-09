import React from 'react';
import {useSelector} from "react-redux";

const Header = () => {
    const {selectedUser} = useSelector(state => state.users);

    return (
        <div>
            {selectedUser &&
            <>
                <div>{selectedUser.id}</div>
                <div>{selectedUser.name}</div>
            </>
            }
        </div>
    );
};

export {Header};