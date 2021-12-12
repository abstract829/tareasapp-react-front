import { Footer } from "../shared/Footer"
import { SideNav } from "../shared/SideNav"
import './styles.css'
interface props{
    children : JSX.Element[] | JSX.Element
}
export const MainLayout = ({children}:props) => {
    return (
        <div className="main__container">
            <SideNav/>
            <div className="main">
                <div className="component_content">
                    {children}
                </div>
                <div className="footer">
                    <Footer/>
                </div>
            </div>
        </div>
    )
}
