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
    .post(`/signup`, user)
    .then(({ data }) => {
      dispatch(registerSuccess(data));
      token.set(data.token);
    })
    .catch(error => dispatch(registerError(error)));
};

const getLogin = user => dispatch => {
  dispatch(logInRequest());
  axios
    .post('/login', user)
    .then(({ data }) => {
      dispatch(logInSuccess(data));
      token.set(data.token);
    })
    .catch(error => dispatch(logInError(error)));
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
  dispatch(logOutRequest());
  axios
    .post('/logout')
    .then(() => {
      token.unset();
      dispatch(logOutSuccess());
    })
    .catch(error => dispatch(logOutError(error)));
};

export default { getRegister, getLogin, getUserData, getLogout };
