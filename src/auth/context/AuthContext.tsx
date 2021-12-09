import { createContext } from 'react';
import { User } from '../../users/interfaces/interfaces';

interface AuthContextProps{
    user: User,
    token?: string,
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)