import { AuthProvider } from "../auth/context/AuthProvider"
import { Perfil } from "./pages/Perfil"
import { MainLayout } from '../main-layout/MainLayout';

export const MiPerfil = () => {
    return (
        <AuthProvider>
            <MainLayout>
                <Perfil></Perfil>
            </MainLayout>          
        </AuthProvider>
    )
}
