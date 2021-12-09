import { useContext, useEffect, useState } from 'react';
import { TareaContext } from '../../tareas/context/TareaContext';
import { Tarea } from '../../tareas/interfaces/interfaces';
const data = [
    {
        iduser: '30',
        idtarea: '1'
    },
    {
        iduser: '30',
        idtarea: '2'
    }
]

export const useTraerTarea = () => {

    const {tareas} = useContext(TareaContext)
    const [misTareas, setMisTareas] = useState([] as Tarea[])

    useEffect(() => {
        const getTareas = () => {
            data.forEach( d => {
                tareas.forEach( t => {
                    if(t.id === d.idtarea){
                        setMisTareas(old => [...old,t])
                    } 
                })
            })
        }
        if(tareas)
        getTareas()
    }, [tareas])

    return {
        misTareas
    }
}