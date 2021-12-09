import { Footer } from "../shared/Footer"
import { SideNav } from '../shared/SideNav';
import { TareaProvider } from "../tareas/context/TareaProvider";
import './styles/styles.css'
import { AuthProvider } from '../auth/context/AuthProvider';
import { Tareas } from "./pages/Tareas";

export const MisTareas = () => {
    return (
        <AuthProvider>
            <TareaProvider>
                <div className="tareas__main__container">
                    <SideNav/>
                    <div className="main">
                        <div className="component_content">
                            <Tareas/>
                        </div>
                        <div className="footer">
                            <Footer/>
                        </div>
                    </div>
                </div>
            </TareaProvider>
        </AuthProvider>
    )
}
export default MisTareas
