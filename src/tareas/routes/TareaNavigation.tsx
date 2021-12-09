import { Navigate, NavLink, Route, Routes } from "react-router-dom"
import { routes } from "./routes"
import './navstyle.css'
export const TareaNavigation = () => {
    return (
        <div>
            <nav>
                <ul className="ul-tarea_nav">
                    {
                        routes.map( ({to,name}) => (
                            <li key={to} className="li-tarea_nav">
                                <NavLink to={to}>{name}</NavLink>
                            </li>
                        ))
                    }
                </ul>
            </nav>
            <Routes>
                {
                    routes.map( ({path,Component}) => (
                        <Route key={path} path={path} element={<Component></Component>}/>
                    ))
                }
                <Route path='/*' element={<Navigate to='notasigned' replace />} />
            </Routes>                

        </div>
    )
}
