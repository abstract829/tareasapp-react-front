import { lazy } from "react";
import { MiPerfil } from "../mi-perfil/MiPerfil";
import MisTareas from '../mis-tareas/MisTareas';

interface Route{
    to: string,
    path: string,
    Component: React.LazyExoticComponent<() => JSX.Element> | (() => JSX.Element),
    name:string,
}

const Tareas = lazy( () => import('../tareas/Tareas'))
const Users = lazy ( () => import('../users/Users'))
const Auth = lazy ( () => import('../auth/Auth'))

export const routes : Route[] = [
    {
        to:'/tareas/',
        path:'/tareas/*',
        Component: Tareas,
        name:'Tareas'
    },
    {
        to:'/users/',
        path:'/users/*',
        Component: Users,
        name:'Usuarios'
    },
    {
        to:'/mis-tareas',
        path:'/mis-tareas',
        Component:MisTareas,
        name:'Mis tareas'
    },
    {
        to:'/mi-perfil',
        path:'/mi-perfil',
        Component: MiPerfil,
        name: 'Mi perfil'
    },
    {
        to:'/auth/',
        path:'/auth/*',
        Component: Auth,
        name: 'Auth'
    }
]