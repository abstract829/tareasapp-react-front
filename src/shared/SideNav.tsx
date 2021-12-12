import './styles.css'
import { routes } from '../routes/routes'
import { NavLink, useNavigate } from 'react-router-dom';
export const SideNav = () => {
    let navigate = useNavigate()
    const logout = () => {
        localStorage.clear()
        navigate('/auth')
    }
    return (
        <div className="sidenav">
            <div>
                <h1>App</h1>
            </div>
            <img src="/logo512.png" alt="" />
            <div className="routes">
                <ul>
                    {
                        routes.map( ({to,name}) => (
                            name !== 'Auth' ?
                            <li key={to}>
                                <NavLink to={to}>{name}</NavLink>
                            </li>
                            : ''
                        ))
                    }
                    <li>
                        <p className="logout" onClick={logout}>Logout</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}
