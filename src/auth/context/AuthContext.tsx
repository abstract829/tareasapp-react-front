import { createContext } from 'react';
import { User } from '../../users/interfaces/interfaces';

interface AuthContextProps{
    logedUser: User,
    updateUser : (user:User) => void
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)