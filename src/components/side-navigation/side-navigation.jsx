import Icone from '../Icones/icones'
import { Link } from 'react-router-dom'
import './side-navigation.css'

export default function SideNav() {
    return (
        <aside className="ss-sideNav">
            <nav className="ss-sidebar__nav" aria-label="Menu latéral">
                <ul className="ss-menu">
                    <li className="ss-menu-item">
                        <Link className="ss-menu-link" href="/" aria-label="Yoga">
                            <Icone type="yoga" />
                        </Link>
                    </li>
                    <li className="ss-menu-item">
                        <Link
                            className="ss-menu-link"
                            href="/"
                            aria-label="Natation"
                        >
                            <Icone type="swimming" />
                        </Link>
                    </li>
                    <li className="ss-menu-item">
                        <Link
                            className="ss-menu-link"
                            href="/"
                            aria-label="Cyclisme"
                        >
                            <Icone type="cycling" />
                        </Link>
                    </li>
                    <li className="ss-menu-item">
                        <Link
                            className="ss-menu-link"
                            href="/"
                            aria-label="Fitness"
                        >
                            <Icone type="fitness" />
                        </Link>
                    </li>
                </ul>
            </nav>
            <p className="ss-sideNav__credit">Copyright, SportSee 2020</p>
        </aside>
    )
}
