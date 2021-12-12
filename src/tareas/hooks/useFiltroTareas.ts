import { useState } from "react"
import { Tarea } from "../interfaces/interfaces"


export const useFiltroTareas = (tareas : Tarea[]) => {
    const [page, setPage] = useState(0)
    
    const filteredTareas = () => {
        return tareas.slice(page , page + 4)
    }

    const nextPage = () => {
        if(page + 4 > filteredTareas().length) return
        setPage(prev => prev + 4)
    }
    const prevPage = () => {
        if(page - 4 < 0) return
        setPage(prev => prev - 4)
    }

    return {
        nextPage,
        prevPage,
        filteredTareas
    }
}