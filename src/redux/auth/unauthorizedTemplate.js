import { token } from './authOperations';

const unauthorizedTemplate = error => {
  if (error.response?.status === 401) {
    token.unset();
  }
};

export default unauthorizedTemplate;
