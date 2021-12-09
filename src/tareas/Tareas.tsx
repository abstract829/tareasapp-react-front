import { Footer } from "../shared/Footer"
import { SideNav } from '../shared/SideNav';
import './styles/styles.css'
import { TareaProvider } from "./context/TareaProvider";
import { TareaNavigation } from './routes/TareaNavigation';

export const Tareas = () => {
    return (
        <TareaProvider>
            <div className="tareas__main__container">
                <SideNav/>
                <div className="main">
                    <div className="component_content">
                        <TareaNavigation></TareaNavigation>
                    </div>
                    <div className="footer">
                        <Footer/>
                    </div>
                </div>
            </div>
        </TareaProvider>
    )
}

export default Tareas
