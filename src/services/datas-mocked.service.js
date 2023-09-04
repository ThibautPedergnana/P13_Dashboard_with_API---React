import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "./data-mock";

const getUserById = (id) => {
  return USER_MAIN_DATA.find((user) => user.id === +id);
};

const getUserActivity = (id) => {
  return USER_ACTIVITY.find((userActivity) => userActivity.userId === +id);
};

const getUserAverageSession = (id) => {
  return USER_AVERAGE_SESSIONS.find(
    (userActivity) => userActivity.userId === +id
  );
};

const getUserPerformance = (id) => {
  return USER_PERFORMANCE.find(
    (userPerformance) => userPerformance.userId === +id
  );
};

export {
  getUserById,
  getUserActivity,
  getUserAverageSession,
  getUserPerformance,
};
