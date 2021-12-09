import { UserTarea } from "../pages/UserTarea";
import { ListadoUsers } from '../pages/ListadoUsers';


interface Route{
    to:string,
    path:string,
    Component:() => JSX.Element,
    name:string,
}

export const routes : Route[] = [
    {
        to:'tareas/:id',
        path:'/tareas/:id',
        Component: UserTarea,
        name: 'Tareas de un usuario'
    },
    {
        to: '',
        path: '/',
        Component: ListadoUsers,
        name:'Usuarios'

    }
]