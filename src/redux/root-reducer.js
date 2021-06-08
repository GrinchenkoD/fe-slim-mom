import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// ! CONFIG PERSIST HERE
// const authPersistConfig = {
//   key: 'auth',
//   storage,
//   whitelist: ['token', 'user', 'isAuthentificated', 'refreshToken', 'sid'],
// };
// const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

const reducer = {
  error: () => true,
};

export default reducer;
