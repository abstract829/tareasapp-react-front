import { Button, Card } from 'react-bootstrap';
import { Tarea } from '../interfaces/interfaces';
import './styles/styles.css'
import { useFiltroTareas } from '../hooks/useFiltroTareas';
import { useTareas } from '../hooks/useTareas';

interface props{
    tareas: Tarea[]
}
export const ListaTareas = ({tareas}:props) => {
    const {asignarTarea, eliminarTarea} = useTareas()
    const {nextPage,prevPage,filteredTareas} = useFiltroTareas(tareas)
    return (
        <div>
            {
                filteredTareas() ? 
                filteredTareas().map( t => (
                        <Card key={t.id} className="tarea-item">
                            <Card.Body>
                                <Card.Title>{t.title}</Card.Title>
                                <Card.Text>{t.desc}</Card.Text>
                                {
                                    (!t.pending && !t.completed) ?
                                    <Button onClick={() => asignarTarea(t.id)}>Tomar tarea</Button>
                                    : ''
                                }
                                {
                                    t.completed ?
                                    <Button onClick={() => eliminarTarea(t.id)}>Eliminar tarea</Button>
                                    : ''
                                }
                            </Card.Body>
                        </Card>
                ))
                : <span>Loading...</span>
            }
            <div className="btn-pag">
                <Button onClick={prevPage}>Anterior</Button>
                <Button onClick={nextPage}>Siguiente</Button>
            </div>
        </div>
    )
}
