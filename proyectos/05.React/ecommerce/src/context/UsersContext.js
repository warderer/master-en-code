import React, { useContext, useState } from 'react';
import { usersApi } from '../services/api';

const UsersContext = React.createContext(undefined);

function UsersProvider(props){
    const [users, setUsers] = useState(null);
    const [usersIsFetching, usersSetIsFetching] = useState(false);
    const [usersIsError, usersSetIsError] = useState(false);

    const getUsers = async () =>{
        usersSetIsFetching(true);
        try {
            const data = await usersApi.getAllUsers();
            setUsers(data);
            usersSetIsFetching(false);
        } catch (error) {
            usersSetIsError(error);
            usersSetIsFetching(false);
        }
    };

    const state = [
        {
            users, usersIsFetching, usersIsError,
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