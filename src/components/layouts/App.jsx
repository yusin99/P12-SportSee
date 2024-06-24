import Nav from '../navigation/navigation'
import SideNav from '../side-navigation/side-navigation'
import { Outlet } from 'react-router-dom'
import './App.css'

export default function Home() {
    return (
        <>
            <Nav />
            <SideNav />
            <Outlet />
        </>
    )
}
