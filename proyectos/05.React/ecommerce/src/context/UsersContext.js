import React, { useContext, useState } from 'react';
import { usersApi } from '../services/api';

const UsersContext = React.createContext(undefined);

function UsersProvider(props){
    const [user, setUser] = useState(null);
    const [userIsFetching, userSetIsFetching] = useState(false);
    const [userIsError, userSetIsError] = useState(false);

    const getUsers = async () =>{
        userSetIsFetching(true);
        try {
            const data = await usersApi.getCurrentUser();
            setUser(data);
            userSetIsFetching(false);
        } catch (error) {
            userSetIsError(error);
            userSetIsFetching(false);
        }
    };

    const state = [
        {
            user, userIsFetching, userIsError,
        },
        {
            getUsers,
        }
    ];

    return (
        <UsersContext.Provider value={state} {...props}/>
    )
}

// Consumidor del contexto
const useUsersContext = () => {
    const context = useContext(UsersContext);
    if (context === undefined) {
        throw new Error('useUsersContext can only be used inside UsersContext');
    }
    return context;
}

export {
    UsersProvider,
    useUsersContext
}