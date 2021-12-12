import { useContext, useEffect, useState } from 'react';
import { UsersContext } from '../context/UsersContext';
import { TareasApi } from '../../tareas/api/TareasApi';
import { User } from '../interfaces/interfaces';
import { Tarea } from '../../tareas/interfaces/interfaces';

interface props{
    id:string | undefined
}
export const useGetUserTarea = ({id}:props) =>{
    const {users} = useContext(UsersContext)
    const [user, setUser] = useState({} as User)
    const [tareas, setTareas] = useState([] as Tarea[])

    useEffect(() => {
        setUser(users.find(u => u.id === id)!)
    }, [id,users])
    
    useEffect(() => {
        TareasApi.get(`/${id}`).then(resp => resp.data)
        .then(resp => {
            if(resp.ok){
                setTareas(resp.data)
            }else{
                console.log('useEffect users useGetUserTarea', resp.msg)
            }
        })
    }, [id,user])

    return {
        user,
        tareas
    }
}