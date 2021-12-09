import { useContext } from 'react';
import { AuthContext } from '../../auth/context/AuthContext';

export const MostrarDatos = () => {
    const {user} = useContext(AuthContext)
    //CREAR FORMIK CON DATOS Y PODER EDITARLOS
    return (
        <div>
            {user.name}<br/>
            {user.email}
        </div>
    )
}
