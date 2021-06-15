const isAuthenticated = state => state.auth?.isAuthenticated;
const login = state => state.auth?.user?.login;
const dailyCaloriesRate = state => state.auth?.user?.dailyCalories;
const forbidenCategories = state => state.auth?.user?.forbidenCategories;
const token = state => state.auth?.token;

export const authSelectors = {
  isAuthenticated,
  login,
  dailyCaloriesRate,
  forbidenCategories,
  token,
};
