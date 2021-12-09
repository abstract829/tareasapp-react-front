import { useEffect, useState } from 'react';
import { User } from '../interfaces/interfaces';
import { UsersContext } from './UsersContext';

interface props{
    children: JSX.Element | JSX.Element[]
}
const data : User[] = [
    {
        id:'1',
        name:'User1',
        email:'user1@email.com'
    },
    {
        id:'2',
        name:'User2',
        email:'user2@email.com'
    },
    {
        id:'3',
        name:'User3',
        email:'user3@email.com'
    }
]
export const UsersProvider = ({children}:props) => {
    const [users, setUsers] = useState([] as User[])
    useEffect(() => {
        setUsers(data)
    }, [])
    return (
        <UsersContext.Provider value={{
            users
        }}>
            {children}
        </UsersContext.Provider>
    )
}
