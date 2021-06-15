import { persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import authReducer from './auth/authReducer';
import errorReducer from './error';
import loadingReducer from './loading/isLoading';
import productsReducer from './products/productsReducer';
import isModalOpen from './modal/modalReducer';

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
  whitelist: ['token', 'isAuthenticated', 'user'],
};
const reducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  products: productsReducer,
  error: errorReducer,
  isLoading: loadingReducer,
  isModalOpen: isModalOpen,
});

export default reducer;
