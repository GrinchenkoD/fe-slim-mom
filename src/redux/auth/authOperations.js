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

axios.defaults.baseURL = 'https://slim-mom.herokuapp.com/';
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
    .catch(error => dispatch(registerError(error.message)));
};

const getLogin = user => dispatch => {
  dispatch(logInRequest());
  axios
    .post('/auth/login', user)
    .then(({ data }) => {
      dispatch(logInSuccess(data));
      token.set(data.token);
    })
    .catch(error => dispatch(logInError(error.message)));
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
    .catch(error => dispatch(getCurrentUserError(error.message)));
};
const getLogout = () => async (dispatch, getState) => {
  dispatch(logOutRequest());
  const {
    auth: { token: accessToken },
  } = getState();

  token.set(accessToken);
  axios
    .post('/auth/logout')
    .then(() => {
      token.unset();
      dispatch(logOutSuccess());
    })
    .catch(error => dispatch(logOutError(error.message)));
};

export { getRegister, getLogin, getUserData, getLogout };
