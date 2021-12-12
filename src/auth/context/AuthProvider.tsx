import { AuthContext } from "./AuthContext"
import { User } from '../../users/interfaces/interfaces';
import {  useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { UsersApi } from "../../users/api/UsersApi";

interface props{
    children: JSX.Element | JSX.Element[]
}

export const AuthProvider = ({children}:props) => {
    const [logedUser, setLogedUser] = useState<User>({} as User)
    let navigate = useNavigate()
    const updateUser = (user: User) =>{
        setLogedUser(user)
    }
    const renovarToken = () => {
        const token = localStorage.getItem('token')
        const headers = {'x-token': token!}
        UsersApi.get('/renew', {headers}).then(resp => resp.data)
        .then(resp => {
            updateUser(resp.user)
            localStorage.setItem('token',resp.token)  

        })
    }
    useEffect(() => {
        if(!localStorage.getItem('token')){
            navigate('/auth')
        }else{
            renovarToken()
        }
    }, [])
    return (
        <AuthContext.Provider value={{
            logedUser, updateUser
        }}>
            {children}
        </AuthContext.Provider>
    )
}
