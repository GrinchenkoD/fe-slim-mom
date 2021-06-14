import { persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import authReducer from './auth/authReducer';
import errorReducer from './error';
<<<<<<< HEAD
import loadingReducer from './loading/isLoading';
=======
import loadingReducer from './isLoading';
import productsReducer from './products/productsReducer';
>>>>>>> baf24bd765da4e0ebb73f23685aee5c7601305df

// ! CONFIG PERSIST HERE
// const authPersistConfig = {
//   key: 'auth',
//   storage,
//   whitelist: ['token', 'user', 'isAuthentificated', 'refreshToken', 'sid'],
// };
// const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'isAuthenticated'],
};
const reducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
<<<<<<< HEAD
  error: errorReducer,
=======
  products:productsReducer,
  error:errorReducer,
>>>>>>> baf24bd765da4e0ebb73f23685aee5c7601305df
  isLoading: loadingReducer,
});

export default reducer;
