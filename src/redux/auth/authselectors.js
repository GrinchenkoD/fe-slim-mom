const isAuthenticated = state => state.auth?.isAuthenticated;

export const authSelectors = {
  isAuthenticated,
};
