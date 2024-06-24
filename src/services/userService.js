import fetchData from '../utils/fetch';
import SS_API_URLS from './apiUrls';
import {
    USER_ACTIVITY,
    USER_AVERAGE_SESSIONS,
    USER_MAIN_DATA,
    USER_PERFORMANCE,
} from '../__mock__/postman-mock-data';

const useMockedData = import.meta.env.VITE_SPORT_SEE_MOCKED_DATA === 'true';

const formatUserData = (userInfo, userActivity, userAverageSessions, userPerformance) => {
    return {
        userInfo: {
            userId: userInfo.id,
            userInfos: userInfo.userInfos,
            userKeyData: userInfo.keyData,
            userScore: userInfo.todayScore || userInfo.score,
        },
        userActivity: userActivity.sessions,
        userAverageSessions: userAverageSessions.sessions,
        userPerformance: {
            kind: userPerformance.kind,
            kindValue: userPerformance.data,
        },
    };
};

const fetchUserDataOnline = async (id) => {
    const urls = [
        SS_API_URLS.USER(id),
        SS_API_URLS.USER_ACTIVITY(id),
        SS_API_URLS.USER_AVERAGE_SESSIONS(id),
        SS_API_URLS.USER_PERFORMANCE(id),
    ];

    const [userInfo, userActivity, userAverageSessions, userPerformance] = await Promise.all(urls.map((url) => fetchData(url)));

    if (!userInfo || !userInfo.data || !userInfo.data.id) {
        throw new Error('User not found');
    }

    return formatUserData(userInfo.data, userActivity.data, userAverageSessions.data, userPerformance.data);
};

const fetchUserDataOffline = (id) => {
    const userInfo = USER_MAIN_DATA.find((user) => user.id === id);
    const userActivity = USER_ACTIVITY.find((user) => user.userId === id);
    const userAverageSessions = USER_AVERAGE_SESSIONS.find((user) => user.userId === id);
    const userPerformance = USER_PERFORMANCE.find((user) => user.userId === id);

    if (!userInfo || !userActivity || !userAverageSessions || !userPerformance) {
        throw new Error(`User with ID ${id} not found.`);
    }

    return formatUserData(userInfo, userActivity, userAverageSessions, userPerformance);
};

export const userService = async (id) => {
    if (useMockedData) {
        return fetchUserDataOffline(id);
    }

    return await fetchUserDataOnline(id);
};
