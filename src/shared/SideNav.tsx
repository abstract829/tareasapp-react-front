import './styles.css'
import { routes } from '../routes/routes'
import { NavLink } from 'react-router-dom'
export const SideNav = () => {
    return (
        <div className="sidenav">
            <div>
                <h1>App</h1>
            </div>
            
            <div className="routes">
                <ul>
                    {
                        routes.map( ({to,name}) => (
                            <li key={to}>
                                <NavLink to={to}>{name}</NavLink>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
