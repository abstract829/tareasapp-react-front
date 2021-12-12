import { useContext } from 'react';
import { AuthContext } from '../../auth/context/AuthContext';
import { TareasApi } from '../api/TareasApi';
import { Tarea } from '../interfaces/interfaces';
import Swal from 'sweetalert2';

export const useTareas = () => {
    const {logedUser} = useContext(AuthContext)
    const asignarTarea = (id : string) =>{
        const req = {
            iduser: logedUser.id,
            idtarea: id
        }
        TareasApi.post('/asignar', req).then(resp => resp.data)
        .then(resp => {
            if(resp.ok){
                Swal.fire(
                    'Listo!',
                    'Tomaste la tarea correctamente!',
                    'success'
                  )
            }else{
                Swal.fire(
                    'Error!',
                    'Hubo un error al tomar la tarea!',
                    'error'
                  )
            }
        })
    }
    const crearTarea = (title:string,desc:string) => {
        TareasApi.post('/crear', {title,desc}).then(resp => resp.data)
        .then(resp => {
            if(resp.ok){    
                Swal.fire(
                    'Listo!',
                    'La tarea se creo correctamente!',
                    'success'
                  )
            }else{
                Swal.fire(
                    'Error!',
                    'Ocurrio un error al crear la tarea!',
                    'error'
                  )
            }
        })
    }
    const completarTarea = (tarea:Tarea) => {
        tarea = {
            ...tarea,
            pending : false,
            completed : true
        }
        TareasApi.post('/completar', tarea).then(resp => resp.data)
        .then(resp => {
            if(resp.ok){
                Swal.fire(
                    'Listo!',
                    'La tarea se marco como completada correctamente!',
                    'success'
                  )
            }else{
                Swal.fire(
                    'Error!',
                    'Ocurrio un error al marcar la tarea como completa!',
                    'error'
                  )
            }
        })
    }
    const eliminarTarea = (id:string) => {
        TareasApi.delete(`/eliminar/${id}`).then(resp => resp.data)
        .then(resp => {
            if(resp.ok){
                Swal.fire(
                    'Listo!',
                    'La tarea elimino correctamente!',
                    'success'
                  )
            }else{
                Swal.fire(
                    'Error!',
                    'Ocurrio un error al eliminar la tarea!',
                    'error'
                  )
            }
        })
    }
    return {
        completarTarea,
        crearTarea,
        asignarTarea,
        eliminarTarea
    }
}