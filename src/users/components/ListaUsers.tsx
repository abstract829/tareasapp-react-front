import { Table } from 'react-bootstrap';
import { User } from '../interfaces/interfaces';
import { NavLink } from 'react-router-dom'

interface props{
    users: User[]
}
export const ListaUsers = ({users}:props) => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Email</th>
                <th>Tareas</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map( u => (
                        <tr key={u.id}>
                            <td>{u.id}</td>
                            <td>{u.name}</td>
                            <td>{u.email}</td>
                            <td><NavLink to={`tareas/${u.id}`}>Ver</NavLink></td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
    )
}
