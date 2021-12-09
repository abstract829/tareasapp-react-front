import { Footer } from "../shared/Footer"
import { SideNav } from "../shared/SideNav"
import { UsersProvider } from "./context/UsersProvider"
import './styles/styles.css'
import { routes } from './routes/routes';
import { Route, Routes } from "react-router-dom";

export const Users = () => {
    return (
        <UsersProvider>
            <div className="users__main__container">
                <SideNav/>
                <div className="main">
                    <div className="component_content">
                        <Routes>
                            {
                                routes.map( ({path,Component}) => (
                                    <Route key={path} path={path} element={<Component/>}/>
                                ))
                            }
                        </Routes>
                    </div>
                    <div className="footer">
                        <Footer/>
                    </div>
                </div>
            </div>
        </UsersProvider>
    )
}
export default Users