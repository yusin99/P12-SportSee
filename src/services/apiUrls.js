const BASE_URL = import.meta.env.VITE_SPORT_SEE_BASE_URL

const SS_API_URLS = {
    USER: (id) => `${BASE_URL}/user/${id}`,
    USER_ACTIVITY: (id) => `${BASE_URL}/user/${id}/activity`,
    USER_AVERAGE_SESSIONS: (id) => `${BASE_URL}/user/${id}/average-sessions`,
    USER_PERFORMANCE: (id) => `${BASE_URL}/user/${id}/performance`,
}

export default SS_API_URLS