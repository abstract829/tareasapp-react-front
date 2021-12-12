import { useEffect, useState } from 'react';
import { User } from '../interfaces/interfaces';
import { UsersContext } from './UsersContext';
import { UsersApi } from '../api/UsersApi';

interface props{
    children: JSX.Element | JSX.Element[]
}
export const UsersProvider = ({children}:props) => {
    const [users, setUsers] = useState([] as User[])
    useEffect(() => {
        UsersApi.get('/').then(resp => resp.data)
        .then(resp => {
            if(resp.ok){
                setUsers(resp.data)
            }else{
                console.log(resp.msg)
            }
        })
    }, [])
    return (
        <UsersContext.Provider value={{
            users
        }}>
            {children}
        </UsersContext.Provider>
    )
}
