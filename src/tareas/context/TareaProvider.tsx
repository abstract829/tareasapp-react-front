import { useEffect, useState } from 'react'
import { TareaContext } from './TareaContext'
import { Tarea } from '../interfaces/interfaces';


interface props{
    children: JSX.Element | JSX.Element[]
}

const data : Tarea[] = [
    {
        id:'1',
        title:'Tarea 1',
        desc:'Tarea desc 1',
        pending: false,
        completed: false
    },
    {
        id:'2',
        title:'Tarea 2',
        desc:'Tarea desc 2',
        pending: false,
        completed: false
    },
    {
        id:'3',
        title:'Tarea 3',
        desc:'Tarea desc 3',
        pending: true,
        completed: false
    },
    {
        id:'4',
        title:'Tarea 4',
        desc:'Tarea desc 4',
        pending: false,
        completed: true
    }
]
export const TareaProvider = ({children}:props) => {
    const [tareas, setTareas] = useState<any>()
    useEffect(() => {
        setTareas(data)
    }, [])

    return (
        <TareaContext.Provider value={{
            tareas
        }}>
            {children}
        </TareaContext.Provider>
    )
}
