import axios from 'axios';
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

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };

const searchProducts = searchQuerry => dispatch => {
  dispatch(searchPoductRequest());
  axios
    .get(`products/${searchQuerry}`)
    .then(({ data }) => {
      dispatch(searchPoductSuccess(data));
      token.set(data.token);
    })
    .catch(error => dispatch(searchPoductError(error)));
};

const addUserProduct = productData => dispatch => {
  dispatch(addPoductRequest());
  axios
    .post('/products/add', productData)
    .then(({ data }) => {
      dispatch(addPoductSuccess(data));
      token.set(data.token);
    })
    .catch(error => dispatch(addPoductError(error)));
};

const deleteUserProduct = productData => async (dispatch, getState) => {
  const { id } = productData;
  const {
    auth: { token: accessToken },
  } = getState();
  token.set(accessToken);
  dispatch(deleteProductRequest());
  try {
    await axios.patch('/products/delete', productData);
    dispatch(deleteProductSuccess(id));
  } catch (error) {
    dispatch(deleteProductError(error.message));
  }
};

const dailyRatePrivate = values => dispatch => {
  dispatch(dailyRatePrivateRequest());
  try {
    const { data } = await axios.post('/products/private/daily', values);
    dispatch(dailyRatePrivateSuccess(data));
  } catch (error) {
    dispatch(dailyRatePrivateError(error.message));
  }
};
const dailyRatePublic = values => dispatch => {
  dispatch(dailyRatePublicRequest());
  try {
    const { data } = await axios.post('/products/public/daily', values);
    // dispatch(dailyRatePublicSuccess(data)); //!хз чё делать при успешном
    return data;
  } catch (error) {
    dispatch(dailyRatePublicError(error.message));
  }
};

const prouctsDayInfo = date => async dispatch => {
  dispatch(dayInfoRequest());
  try {
    const { data } = await axios.get(`/products/day-info/${date}`);
    dispatch(dayInfoSuccess(data)); //!!
  } catch (error) {
    dispatch(dayInfoError(error.message));
  }
};

export default {
  searchProducts,
  addUserProduct,
  deleteUserProduct,
  dailyRatePrivate,
  dailyRatePublic,
  prouctsDayInfo,
};
