import { AuthProvider } from "../auth/context/AuthProvider"
import { Footer } from "../shared/Footer"
import { SideNav } from "../shared/SideNav"
import { Perfil } from "./pages/Perfil"
import './styles/styles.css'

export const MiPerfil = () => {
    return (
        <AuthProvider>
                <div className="perfil__main__container">
                    <SideNav/>
                    <div className="main">
                        <div className="component_content">
                            <Perfil></Perfil>
                        </div>
                        <div className="footer">
                            <Footer/>
                        </div>
                    </div>
                </div>
        </AuthProvider>
    )
}
