import axios from 'axios';
import actions from './authActions';
import unauthorizedTemplate from './unauthorizedTemplate';

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
export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
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

const getRegister = user => dispatch => {
  dispatch(registerRequest());

  const { login, password } = user;
  axios
    .post(`/auth/registration`, user)
    .then(({ data }) => {
      dispatch(registerSuccess(data));
      // token.set(data.token);
      dispatch(getLogin({ login, password }));
    })
    .catch(error => dispatch(registerError(error.message)));
};

const getCurrentUser = persistedToken => (dispatch, getState) => {
  // const persistedToken = getState().auth.token;
  // if (!persistedToken) {
  //   return;
  // }
  token.set(persistedToken);
  dispatch(getCurrentUserRequest());
  axios
    .get('/auth/get-current-user')
    .then(({ data }) => dispatch(getCurrentUserSuccess(data)))
    .catch(error => dispatch(getCurrentUserError(error.message)));
};
const getLogout = () => async (dispatch, getState) => {
  dispatch(logOutRequest());
  // const {
  //   auth: { token: accessToken },
  // } = getState();

  // token.set(accessToken);
  axios
    .post('/auth/logout')
    .then(() => {
      token.unset();
      dispatch(logOutSuccess());
    })
    .catch(error => {
      unauthorizedTemplate(error);
      // if (error.response?.status === 401 || error.response?.status === 404) {
      //   token.unset();
      // }
      dispatch(logOutError(error.message));
    });
};

export { getRegister, getLogin, getCurrentUser, getLogout };
