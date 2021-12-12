import { TareasCompleted } from '../pages/TareasCompleted';
import { TareasPending } from '../pages/TareasPending';
import { TareasNoAsign } from '../pages/TareasNoAsign';
import { AgregarTarea } from '../pages/AgregarTarea';

interface Route{
    to: string,
    path: string,
    Component:() => JSX.Element,
    name:string,
}

export const routes :Route[] = [
    {
        to:'notasigned',
        path:'/notasigned',
        Component: TareasNoAsign,
        name:'Tareas sin asignar'
    },
    {
        to:'completed',
        path:'/completed',
        Component: TareasCompleted,
        name:'Tareas completadas'
    },
    {
        to:'pending',
        path:'/pending',
        Component: TareasPending,
        name:'Tareas pendientes'
    },
    {
        to:'crear',
        path:'/crear',
        Component: AgregarTarea,
        name:'Agregar una tarea'
    }
]