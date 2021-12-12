import { TareaProvider } from "../tareas/context/TareaProvider";
import { AuthProvider } from '../auth/context/AuthProvider';
import { Tareas } from "./pages/Tareas";
import { MainLayout } from '../main-layout/MainLayout';
import { UsersProvider } from "../users/context/UsersProvider";

export const MisTareas = () => {
    return (
        <AuthProvider>
            <TareaProvider>
                <UsersProvider>
                    <MainLayout>
                        <Tareas/>
                    </MainLayout>   
                </UsersProvider>  
            </TareaProvider>
        </AuthProvider>
    )
}
export default MisTareas
