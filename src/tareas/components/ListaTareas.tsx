import { Card } from 'react-bootstrap';
import { Tarea } from '../interfaces/interfaces';
import './styles/styles.css'

interface props{
    tareas: Tarea[]
}
export const ListaTareas = ({tareas}:props) => {
    return (
        <div>
            {
                tareas ? 
                tareas.map( t => (
                    <Card key={t.id} className="tarea-item">
                        <Card.Body>
                            <Card.Title>{t.title}</Card.Title>
                            <Card.Text>{t.desc}</Card.Text>
                        </Card.Body>
                    </Card>
                ))
                : <span>Loading...</span>
            } 
        </div>
    )
}
