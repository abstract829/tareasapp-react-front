import { TareaProvider } from "./context/TareaProvider";
import { TareaNavigation } from './routes/TareaNavigation';
import { MainLayout } from "../main-layout/MainLayout";
import { AuthProvider } from "../auth/context/AuthProvider";

export const Tareas = () => {
    return (
        <AuthProvider>
            <TareaProvider>
                <MainLayout>
                    <TareaNavigation></TareaNavigation>
                </MainLayout>
            </TareaProvider>
        </AuthProvider>
    )
}

export default Tareas
