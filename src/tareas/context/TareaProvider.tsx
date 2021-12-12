import { useEffect, useState } from 'react'
import { TareaContext } from './TareaContext'
import { TareasApi } from '../api/TareasApi';

interface props{
    children: JSX.Element | JSX.Element[]
}

export const TareaProvider = ({children}:props) => {
    const [tareas, setTareas] = useState<any>()
    useEffect(() => {
        TareasApi.get('/').then( resp => resp.data )
        .then(resp => {
            if(resp.ok){
                setTareas(resp.data)
            }else{
                console.log('Error en useEffect TareaProvider', resp.msg)
            }
        })
    }, [tareas])

    return (
        <TareaContext.Provider value={{
            tareas
        }}>
            {children}
        </TareaContext.Provider>
    )
}
