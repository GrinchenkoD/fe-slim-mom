import axios from 'axios';
import unauthorizedTemplate from '../auth/unauthorizedTemplate';
import actions from './productsActions';

const {
  searchPoductRequest,
  searchPoductSuccess,
  searchPoductError,
  addPoductRequest,
  addPoductSuccess,
  addPoductError,
  deleteProductRequest,
  deleteProductSuccess,
  deleteProductError,
  dailyRatePrivateRequest,
  dailyRatePrivateSuccess,
  dailyRatePrivateError,
  dailyRatePublicRequest,
  dailyRatePublicSuccess,
  dailyRatePublicError,
  dayInfoRequest,
  dayInfoSuccess,
  dayInfoError,
} = actions;

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const searchProducts = searchQuerry => dispatch => {
  dispatch(searchPoductRequest());
  axios
    .get(`products/${searchQuerry}`)
    .then(({ data }) => {
      dispatch(searchPoductSuccess(data));
    })
    .catch(error => {
      unauthorizedTemplate(error);

      dispatch(searchPoductError(error));
    });
};

const addUserProduct = productData => dispatch => {
  dispatch(addPoductRequest());
  axios
    .post('/products/add', productData)
    .then(({ data }) => {
      dispatch(addPoductSuccess(data));
    })
    .catch(error => {
      unauthorizedTemplate(error);

      dispatch(addPoductError(error));
    });
};

const deleteUserProduct = productData => async (dispatch, getState) => {
  const { id } = productData;
  dispatch(deleteProductRequest());
  try {
    const { data } = await axios.patch('/products/delete', productData);
    dispatch(deleteProductSuccess({ id, data }));
  } catch (error) {
    unauthorizedTemplate(error);
    dispatch(deleteProductError(error.message));
  }
};

const dailyRatePrivate = values => async (dispatch, getState) => {
  dispatch(dailyRatePrivateRequest());
  const {
    auth: { token: accessToken },
  } = getState();
  token.set(accessToken);
  try {
    const { data } = await axios.post('/products/private/daily', values);
    dispatch(dailyRatePrivateSuccess(data));
  } catch (error) {
    unauthorizedTemplate(error);
    dispatch(dailyRatePrivateError(error.message));
  }
};

const dailyRatePublic = values => async dispatch => {
  dispatch(dailyRatePublicRequest());
  try {
    const { data } = await axios.post('/products/public/daily', values);
    dispatch(dailyRatePublicSuccess()); //!хз чё делать при успешном
    return data;
  } catch (error) {
    dispatch(dailyRatePublicError(error.message));
  }
};

const prouctsDayInfo = date => async (dispatch, getState) => {
  // const {
  //   auth: { token: accessToken },
  // } = getState();
  // token.set(accessToken);
  dispatch(dayInfoRequest());
  try {
    const { data } = await axios.get(`/products/day-info/${date}`);
    dispatch(dayInfoSuccess(data));
  } catch (error) {
    unauthorizedTemplate(error);
    dispatch(dayInfoError(error.message));
  }
};
const productsOperations = {
  searchProducts,
  addUserProduct,
  deleteUserProduct,
  dailyRatePrivate,
  dailyRatePublic,
  prouctsDayInfo,
};
export default productsOperations;
