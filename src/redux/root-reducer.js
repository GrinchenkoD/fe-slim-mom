import { persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import authReducer from './auth/authReducer';
import errorReducer from './error';
import loadingReducer from './loading/isLoading';
import productsReducer from './products/productsReducer';
import isModalOpen from './modal/modalReducer';
import date from './date/dateReducer';

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
  date: date,
});

export default reducer;
