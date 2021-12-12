import axios from 'axios'

export const TareasApi = axios.create({
    baseURL: `http://localhost:4000/tareas`
})

