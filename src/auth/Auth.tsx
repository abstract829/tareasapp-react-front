import { Navigate, Route, Routes } from "react-router-dom"
import { Login } from "./components/Login/Login"
import './components/Login/styles.css'
import { Register } from "./components/Register/Register"
import { AuthProvider } from "./context/AuthProvider"
export const Auth = () => {
    return (
        <AuthProvider>
            <div className="auth">
                {
                    
                    <Routes>
                        <Route path="/register" element={<Register></Register>}/>
                        <Route path="/login" element={<Login></Login>}/>
                        <Route path="/*" element={<Navigate to="login" replace/>}/>
                    </Routes>
                }
            </div>
        </AuthProvider>
    )
}
export default Auth