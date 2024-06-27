import PropTypes from 'prop-types'
import { userService } from '../../../services/userService'
import {
    ResponsiveContainer,
    Bar,
    BarChart,
    XAxis,
    YAxis,
    Legend,
    Tooltip,
    CartesianGrid,
} from 'recharts'
import { useEffect, useState } from 'react'
import './activity.css'


function getSessionInfo(userActivity, numDays = 10, offset = 0) {
    // Set array of days
    const days = Array.from({ length: numDays }, (_, i) => i + 1)

    // Attribute a session length to each day
    let sessions = []
    if (userActivity.sessions && userActivity.sessions.length > 0) {
        sessions = days.map((day, index) => ({
            ...userActivity.sessions[index + offset],
            day: day, // Add day attribute
        }))
    }

    return sessions
}

const legendValue = (value) => {
    return <span className="legend">{value}</span>
}

export default function Activity({ userId = 0 }) {
    const [userActivity, setUserActivity] = useState({ sessions: [] })

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userActivity = await userService(userId)
                setUserActivity({
                    sessions: userActivity?.userActivity,
                })
            } catch (error) {
                console.error('Failed to fetch user activity:', error)
            }
        }
        fetchData()
    }, [userId])

    const sessions = getSessionInfo(userActivity)
    return (
        <section className="ss-activity">
            <h2>Activité quotidienne</h2>
            <ResponsiveContainer
                width="99%" // FIX resizing problem with recharts
                height="99%" // FIX resizing problem with recharts
                className={'ss-activityChart'}
            >
                <BarChart data={sessions} barGap={8} stackOffset="sign">
                    <CartesianGrid
                        strokeDasharray="2 2"
                        stroke="#DEDEDE"
                        horizontal={true}
                        vertical={false}
                    />
                    <XAxis
                        dataKey="day"
                        tick={{
                            fill: '#9699a6',
                            fontSize: '14',
                            fontWeight: 500,
                        }}
                        tickLine={false}
                        tickSize={16}
                        stroke="#DEDEDE"
                    />
                    <YAxis
                        yAxisId={0}
                        dataKey="kilogram"
                        stroke="#9699a6"
                        orientation="right"
                        axisLine={false}
                        tickLine={false}
                        width={24}
                        tick={{
                            fill: '#9699a6',
                            fontSize: '14',
                            fontWeight: 500,
                        }}
                        domain={['dataMin - 1', 'dataMax +1']}
                    />
                    <YAxis
                        yAxisId={1}
                        dataKey="calories"
                        hide={true}
                        domain={['dataMin - 100', 'dataMax + 100']}
                    />
                    <Tooltip
                        itemStyle={{
                            color: 'white',
                            fontSize: 11,
                            fontWeight: 500,
                        }}
                        formatter={(value, name, unit) => [value, unit]}
                        labelStyle={{ display: 'none' }}
                        contentStyle={{
                            backgroundColor: '#E60000',
                            borderStyle: 'none',
                        }}
                        cursor={{ fill: 'rgba(196, 196, 196, 0.5)' }}
                    />
                    <Legend
                        layout="horizontal"
                        verticalAlign="top"
                        align="right"
                        iconType="circle"
                        iconSize={8}
                        height={47}
                        formatter={legendValue}
                    />
                    <Bar
                        yAxisId={0}
                        dataKey="kilogram"
                        barSize={8}
                        radius={[8, 8, 0, 0]}
                        unit=" kg"
                        name="Poids (kg)"
                        fill="#282D30"
                    />
                    <Bar
                        yAxisId={1}
                        dataKey="calories"
                        barSize={8}
                        radius={[8, 8, 0, 0]}
                        unit=" Kcal"
                        name="Calories brûlées (kCal)"
                        fill="#E60000"
                    />
                </BarChart>
            </ResponsiveContainer>
        </section>
    )
}

Activity.propTypes = {
    userId: PropTypes.number.isRequired,
}
