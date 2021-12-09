import { useContext } from 'react';
import { ListaUsers } from '../components/ListaUsers';
import { UsersContext } from '../context/UsersContext';

export const ListadoUsers = () => {
    const {users} = useContext(UsersContext)
    return (
        <div>
            <h2>Listado de usuarios</h2>
            <hr />
            <ListaUsers users={users}></ListaUsers>
        </div>
    )
}
