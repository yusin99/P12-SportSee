import { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import './home.css'
import Header from '../components/header/header'
import Spinner from '../components/spinner/spinner'
import Activity from './../components/recharts/activity/activity';
import Score from './../components/recharts/score/score';
import KeyDatas from './../components/recharts/data/data';
import AverageSessions from '../components/recharts/avg-session/avg-session'
import Performances from './../components/recharts/perfs/perfs';
import { userService } from '../services/userService'

export default function Home() {
    const { id } = useParams()
    const [pageLoading, setPageLoading] = useState(true)
    const [pageNotFound, setPageNotFound] = useState(false)
    const [apiError, setApiError] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setPageLoading(true)
                const fetchedData = await userService(Number(id))
                if(!fetchedData){
                    setPageNotFound(true)
                }
            } catch (error) {
                console.log(error)
                if(error.message === "Invalid ID"){
                    setPageNotFound(true)
                } else {
                    setApiError(true)
                }
            } finally {
                setPageLoading(false)
            }
        }
        fetchData()
    }, [id])
    
    if (pageLoading) {
        return <Spinner />
    }
    
    if (pageNotFound) {
        return <Navigate to="/404" />
    }

    if (apiError) {
        return <Navigate to="/error" />
    }

    return (
        <main>
            <div className="ss-profile">
                <Header userId={Number(id)}/>
                <Activity userId={Number(id)} />
                <KeyDatas userId={Number(id)} />
                <AverageSessions userId={Number(id)} />
                <Performances userId={Number(id)} />
                <Score userId={Number(id)}/>
            </div>
        </main>
    )
}
