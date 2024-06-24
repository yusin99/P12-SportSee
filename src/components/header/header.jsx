import { userService } from '../../services/userService'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import './header.css'

export default function Header({ userId }) {
    const [userDtls, setUserDtls] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedData = await userService(userId)
                setUserDtls(fetchedData)
            } catch (err) {
                console.error('Failed to fetch user details:', err)
            }
        }
        fetchData()
    }, [userId])

    return (
        <header className="ss-header">
            <h1>
                Bonjour{' '}<strong>{userDtls?.userInfo.userInfos.firstName}</strong>
            </h1>
            <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
        </header>
    )
}

Header.propTypes = {
    userId: PropTypes.number.isRequired,
}
