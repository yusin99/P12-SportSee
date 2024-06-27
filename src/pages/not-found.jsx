/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom'
import './not-found.css'

export default function NotFound() {
    return (
        <main>
            <div className="ss-not-found">
                <h1>404</h1>
                <p>Cette page n'existe pas...</p>
                <Link className="ss-button" to={'/'}>
                    Revenir au profil
                </Link>
            </div>
        </main>
    )
}
