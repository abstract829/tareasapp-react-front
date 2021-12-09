import { AuthContext } from "./AuthContext"

const user = {
    id:'30',
    name:'User del auth',
    email:'authuser@email.com'
}

interface props{
    children: JSX.Element | JSX.Element[]
}

export const AuthProvider = ({children}:props) => {
    return (
        <AuthContext.Provider value={{
            user
        }}>
            {children}
        </AuthContext.Provider>
    )
}
