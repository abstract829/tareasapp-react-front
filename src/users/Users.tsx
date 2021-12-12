import { UsersProvider } from "./context/UsersProvider"
import { routes } from './routes/routes';
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "../main-layout/MainLayout";
import { TareaProvider } from "../tareas/context/TareaProvider";
import { AuthProvider } from "../auth/context/AuthProvider";

export const Users = () => {
    return (
        <AuthProvider>
            <TareaProvider>
                <UsersProvider>
                    <MainLayout>
                        <Routes>
                            {
                                routes.map( ({path,Component}) => (
                                    <Route key={path} path={path} element={<Component/>}/>
                                ))
                            }
                        </Routes>
                    </MainLayout>       
                </UsersProvider>
            </TareaProvider>
        </AuthProvider>
    )
}
export default Users