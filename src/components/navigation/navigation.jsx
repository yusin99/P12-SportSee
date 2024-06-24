import { Link, NavLink } from 'react-router-dom'
import './navigation.css'
import logo from '/logo.svg'


export default function Nav() {
    return (
        <nav className="ss-nav" aria-label="Menu principal">
            <Link className="home-link" to="/">
                <img className="logo" src={logo} alt="Logo SportSee app" />
            </Link>
            <ul className="ss-menu">
                <li className="ss-menu-item">
                    <NavLink className="ss-menu-link" to="/">
                        Accueil
                    </NavLink>
                </li>
                <li className="ss-menu-item">
                    <NavLink className="ss-menu-link" to="/">
                        Profil
                    </NavLink>
                </li>
                <li className="ss-menu-item">
                    <NavLink className="ss-menu-link" to="/">
                        Réglages
                    </NavLink>
                </li>
                <li className="ss-menu-item">
                    <Link className="ss-menu-link" href="/">
                        Communauté
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
