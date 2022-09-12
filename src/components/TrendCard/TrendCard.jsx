import { useEffect, useState } from 'react'
import { TrendData } from '../../Data/TrendData'
import './TrendCard.scss'

const TrendCard = () => {
    const [trends, setTrends] = useState()

    useEffect(() => {
        const getTrends = () => {
            setTrends(TrendData)
        }

        return () => {
            getTrends()
        }
    }, [])

    return (
        <div className='TrendCard'>
            <h3>Trends for you</h3>
            {trends && trends.map((trend, index) => (
                <div className='trend' key={index}>
                    <span>#{trend.name}</span>
                    <span>{trend.shares}k</span>
                </div>
            ))}
        </div>
    )
}

export default TrendCard