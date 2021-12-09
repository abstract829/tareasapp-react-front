import { useParams } from "react-router-dom"
import { useContext, useEffect, useState } from 'react';
import { UsersContext } from '../context/UsersContext';
import { User } from '../interfaces/interfaces';

export const TareasUser = () => {
    const {id} = useParams()
    const {users} = useContext(UsersContext)
    const [user, setUser] = useState({} as User)
    
    useEffect(() => {
        const getUser = () => {
            setUser(users.find(u => u.id === id)!)
        }
        getUser()
    }, [id,users])
    return (
        <div>
            <h1>Tareas del user: {id} </h1>
            {
                user ?
                (
                    <div>
                        <div>{user.id}</div>
                        <div>{user.name}</div>
                        <div>{user.email}</div>
                    </div>
                )
                : ''
            }
        </div>
    )
}
