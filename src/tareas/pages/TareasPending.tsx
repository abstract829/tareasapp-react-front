import { useContext, useEffect, useState } from "react"
import { ListaTareas } from "../components/ListaTareas"
import { TareaContext } from "../context/TareaContext"
import { Tarea } from "../interfaces/interfaces"

export const TareasPending = () => {
    const {tareas} = useContext(TareaContext)
    const [filteredTareas, setFilteredTareas] = useState([] as Tarea[])
    useEffect(() => {
        if(tareas)
        setFilteredTareas(tareas.filter(t => t.pending))
    }, [tareas])
    return (
        <div>
            <ListaTareas tareas={filteredTareas}></ListaTareas>
        </div>
    )
}
