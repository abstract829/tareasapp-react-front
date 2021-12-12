import axios from 'axios'

export const UsersApi = axios.create({
    baseURL: 'http://localhost:4000/users'
})