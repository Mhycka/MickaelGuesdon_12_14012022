import {useEffect, useState} from "react"
import config from './config'
import {userMainMocked, userActivitiesMocked, userAverageSessionsMocked, userPerformanceMocked} from './API_File'

/**
 * @const {Number} currentUser
 * @const {String} apiUrl
 * @const {Boolean} mockData
 * @const {Number} simDataLoadingTime
 */
const {currentUser, apiUrl, mockData, simDataLoadingTime} = config

/**
 * Context provider
 * @component
 * @param {Object} params
 * @param {JSX} params.children
 * @return {JSX} 
 */
export default function DashboardContextProvider() {

    /**
     * State
     */
    const [userdata, setUser] = useState()
    const [activityData, setActivity] = useState()
    const [averageSessionsData, setAverageSessions] = useState()
    const [performanceData, setPerformance] = useState()
    const [isLoaded, setIsLoaded] = useState(false);

    /**
     * Get user data
     */
    const getUser = () => {
        if (!mockData) fetch(`${apiUrl}/user/${currentUser}`)
            .then((response => response.json()))
            .then(data => setUser(data.data))
            .catch((error) => setIsLoaded(true))
        else setUser(userMainMocked.find((item) => item.id === currentUser))
    }

    useEffect(() => {
        if (simDataLoadingTime === 0) getUser()
        else setTimeout(getUser, simDataLoadingTime)
    }, [])

    /**
     * Get user activity data
     */
    const getUserActivity = () => {
        if (!mockData) fetch(`${apiUrl}/user/${userdata.id}/activity`)
            .then((response => response.json()))
            .then(data => setActivity(data.data.sessions))
            .catch((error) => setIsLoaded(true))
        else setActivity(userActivitiesMocked.find((activity) => activity.userId === userdata.id).sessions)
    }

    /**
     * Get user average sessions data
     */
    const getUserAverageSessions = () => {
        if (!mockData) fetch(`${apiUrl}/user/${userdata.id}/average-sessions`)
            .then((response => response.json()))
            .then(data => setAverageSessions(data.data.sessions))
            .catch((error) => setIsLoaded(true))
        else setAverageSessions(userAverageSessionsMocked.find((averageSessions) => averageSessions.userId === userdata.id).sessions)
    }

    /**
     * Get user performance data
     */
    const getUserPerformance = () => {
        if (!mockData) fetch(`${apiUrl}/user/${userdata.id}/performance`)
            .then((response => response.json()))
            .then(data => {
                setPerformance(data.data.data)
            })
            .catch((error) => setIsLoaded(true))
        else {
            const performance = userPerformanceMocked.find((performance) => performance.userId === userdata.id)
            setPerformance(performance.data)
        }
    }

    useEffect(() => {
        if (!userdata) return
        const getUserData = () => {
            getUserActivity()
            getUserAverageSessions()
            getUserPerformance()
        }
        if (simDataLoadingTime === 0) getUserData()
        else setTimeout(getUserData, simDataLoadingTime)
    }, [userdata])

    return (
        {userdata, activityData, averageSessionsData, performanceData, isLoaded}
    )
}