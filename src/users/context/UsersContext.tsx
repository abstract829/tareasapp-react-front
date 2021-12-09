import { createContext } from 'react'
import { User } from '../interfaces/interfaces';

interface UsersContextProps{
    users : User[]
}

export const UsersContext = createContext<UsersContextProps>({} as UsersContextProps)