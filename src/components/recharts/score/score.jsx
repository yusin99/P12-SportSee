import { userService } from '../../../services/userService'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import {
    PolarAngleAxis,
    RadialBar,
    RadialBarChart,
    ResponsiveContainer,
} from 'recharts'
import './score.css'

export default function Score({ userId }) {
    const [score, setScore] = useState(0)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userData = await userService(userId)
                setScore(userData?.userInfo?.userScore || 0)
            } catch (error) {
                console.error('Failed to fetch user score:', error)
            }
        }
        fetchData()
    }, [userId])

    const calculatedScore = score * 100
    const scoreValue = [{ value: calculatedScore }]
    const newScore = calculatedScore

    return (
        <section className="ss-score">
            <h2>Score</h2>
            <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart
                    data={scoreValue}
                    innerRadius={200}
                    barSize={10}
                    startAngle={90}
                    endAngle={440}
                >
                    <PolarAngleAxis
                        type="number"
                        domain={[0, 100]}
                        tick={false}
                    />
                    <RadialBar
                        dataKey="value"
                        cornerRadius={14}
                        fill={'#FF0000'}
                    />
                    <text
                        x="50%"
                        y="42%"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fontSize="26"
                        fontWeight="700"
                        fill="black"
                    >
                        {newScore}%
                    </text>
                    <text
                        x="50%"
                        y="46%"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fontSize="16"
                        fill="gray"
                        fontWeight="500"
                    >
                        <tspan x="50%" dy="1.2em">
                            de votre
                        </tspan>
                        <tspan x="50%" dy="1.2em">
                            objectif
                        </tspan>
                    </text>
                </RadialBarChart>
            </ResponsiveContainer>
        </section>
    )
}

Score.propTypes = {
    userId: PropTypes.number.isRequired,
}
