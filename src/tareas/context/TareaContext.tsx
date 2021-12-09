import { createContext } from 'react'
import { Tarea } from '../interfaces/interfaces'

interface TareaContextProps{
    tareas: Tarea[]
}

export const TareaContext = createContext<TareaContextProps>({} as TareaContextProps)