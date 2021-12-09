import { useContext, useEffect, useState } from 'react'
import { ListaTareas } from '../components/ListaTareas'
import { TareaContext } from '../context/TareaContext'
import { Tarea } from '../interfaces/interfaces'


export const TareasNoAsign = () => {
    const {tareas} = useContext(TareaContext)
    const [filteredTareas, setFilteredTareas] = useState([] as Tarea[])
    useEffect(() => {
        if(tareas)
        setFilteredTareas(tareas.filter(t => (!t.completed && !t.pending)))
    }, [tareas])
    return (
        <div>
            <ListaTareas tareas={filteredTareas}></ListaTareas>
        </div>
    )
}
