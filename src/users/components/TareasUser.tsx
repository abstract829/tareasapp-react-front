import { useParams } from "react-router-dom"
import { useGetUserTarea } from '../hooks/useGetUserTarea';
import { Card } from "react-bootstrap";

export const TareasUser = () => {
    const {id} = useParams()
    const {user,tareas} = useGetUserTarea({id})
    return (
        <div>
            {
                user ?
                <h2>Tareas de {user.name}</h2>
                : ''
            }
            {
                tareas.length > 0 ?
                (tareas.map(t => (
                    <Card key={t.id} className="tarea-item">
                        <Card.Body>
                            <Card.Title>{t.title}</Card.Title>
                            <Card.Text>{t.desc}</Card.Text>
                        </Card.Body>
                    </Card>
                )))
                : (<h3>El usuario no tiene tareas asignadas</h3>)
            }
        </div>
    )
}
