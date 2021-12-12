import { UsersApi } from "../../users/api/UsersApi"
import { User } from '../../users/interfaces/interfaces';
import { useContext } from 'react';
import { AuthContext } from './AuthContext';
import { useNavigate } from "react-router-dom";


export const useAuth = () => {
    const {updateUser} = useContext(AuthContext)
    let navigate = useNavigate()
    const crearUsuario = (user : User) => {
        UsersApi.post('/crear',user).then(resp => resp.data)
        .then(resp => {
            if(resp.ok){
                updateUser(resp.user)
                localStorage.setItem('token', resp.token)
                navigate('/tareas')
            }else{
                console.log('Error registro')
            }
        })
    }
    const logearUsuario = (email:string,password:string) => {
        UsersApi.post('/logear', {email,password} ).then(resp => resp.data)
        .then(resp => {
            if(resp.ok){
                updateUser(resp.user)
                localStorage.setItem('token',resp.token)
                navigate('/tareas')
            }else{
                console.log('Error login')
            }
        })
    }
    
    return {
        crearUsuario,logearUsuario
    }
}