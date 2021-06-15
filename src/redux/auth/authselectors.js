const isAuthenticated = state => state.auth?.isAuthenticated;
const nickname = state => state.auth?.user?.nickname;
const dailyCaloriesRate = state => state.auth?.user?.dailyCalories;
const forbidenCategories = state => state.auth?.user?.forbidenCategories;

export const authSelectors = {
  isAuthenticated,
  nickname,
  dailyCaloriesRate,
  forbidenCategories,
};
