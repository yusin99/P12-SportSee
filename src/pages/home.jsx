import { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import './home.css'
import Header from '../components/header/header'
import Spinner from '../components/spinner/spinner'


export default function Home() {
    const { id } = useParams()
    const [pageLoading, setPageLoading] = useState(true)
    const [pageNotFound, setPageNotFound] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setPageLoading(true)
            } catch (error) {
                if (error.message === 'User not found') {
                    setPageNotFound(true)
                }
            } finally {
                setPageLoading(false)
            }
        }
        fetchData()
    }, [id])

    if (pageNotFound) {
        return <Navigate to="/404" />
    }

    if (pageLoading) {
        return <Spinner />
    }

    return (
        <main>
            <div className="ss-profile">
                <Header userId={Number(id)} className="ss-header" />
            </div>
        </main>
    )
}
