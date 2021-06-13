import axios from 'axios';
import actions from './authActions';

const {
    registerRequest,
    registerSuccess,
    registerError,
    logInRequest,
    logInSuccess,
    logInError,
    logOutRequest,
    logOutSuccess,
    logOutError,
    getCurrentUserRequest,
    getCurrentUserSuccess,
    getCurrentUserError,
  } = actions;
  
axios.defaults.baseURL = 'Подставить урлу на которой будет бекенд';
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const getRegister = user => dispatch => {
  dispatch(registerRequest());
  axios
    .post(`/auth/registration`, user)
    .then(({ data }) => {
      dispatch(registerSuccess(data));
      token.set(data.token);
    })
    .catch(error => dispatch(registerError(error)));
};

const getLogin = user => dispatch => {
  dispatch(loginRequest());
  axios
    .post('/auth/login', user)
    .then(({ data }) => {
      dispatch(loginSuccess(data));
      token.set(data.token);
    })
    .catch(error => dispatch(loginError(error)));
};
const getUserData = () => (dispatch, getState) => {
  const persistedToken = getState().auth.token;
  if (!persistedToken) {
    return;
  }
  token.set(persistedToken);
  dispatch(getCurrentUserRequest());
  axios
    .get('/current')
    .then(({ data }) => dispatch(getCurrentUserSuccess(data)))
    .catch(error => dispatch(getCurrentUserError(error)));
};
const getLogout = () => dispatch => {
  dispatch(logoutRequest());
  axios
    .post('/logout')
    .then(() => {
      token.unset();
      dispatch(logoutSuccess());
    })
    .catch(error => dispatch(logoutError(error)));
};

export default { getRegister, getLogin, getUserData, getLogout };
