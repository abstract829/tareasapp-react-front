import { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { AuthContext } from '../../auth/context/AuthContext';
import { useTraerTarea } from '../hooks/useTraerTareas';
import './styles/styles.css'

export const MostrarTareas = () => {
    const {user} = useContext(AuthContext)

    const {misTareas} = useTraerTarea()

    //CREAR CONTEXT QUE TRAIGA TODAS LAS ID DE LAS TAREAS DE ESTE USUARIO
    //MOSTRAR ESAS TAREAS ATRAVES DEL TAREAPROVIDER
    return (
        <div>
            {
                user ?
                (
                    <div>
                        <h3>{user.id}</h3>
                        <h3>{user.name}</h3>
                        <h3>{user.email}</h3>
                    </div>
                )
                : ''
            }
            {
                misTareas ?
                misTareas.map( t => (
                    <Card key={t.id} className="tarea-item">
                        <Card.Body>
                            <Card.Title>{t.title}</Card.Title>
                            <Card.Text>{t.desc}</Card.Text>
                        </Card.Body>
                    </Card>
                ))
                : ''
            }
        </div>
    )
}
