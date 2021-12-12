import { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { AuthContext } from '../../auth/context/AuthContext';
import './styles/styles.css'
import { useGetUserTarea } from '../../users/hooks/useGetUserTarea';
import { useTareas } from '../../tareas/hooks/useTareas';

export const MostrarTareas = () => {
    const {logedUser} = useContext(AuthContext)
    const {tareas} = useGetUserTarea({id:logedUser.id})
    const {completarTarea} = useTareas()
    return (
        <div>
            {
                logedUser ? <h1>{logedUser.name}</h1> : ''
            }
            {
                tareas ?
                tareas.map( t => (
                    <Card key={t.id} className="tarea-item">
                        <Card.Body>
                            <Card.Title>{t.title}</Card.Title>
                            <Card.Text>{t.desc}</Card.Text>
                            <Button onClick={() => completarTarea(t)}>Marcar completada</Button>
                        </Card.Body>
                    </Card>
                ))
                : ''
            }
        </div>
    )
}
