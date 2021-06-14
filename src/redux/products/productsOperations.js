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
    await axios.delete('/products/delete', productData);
    dispatch(deleteProductSuccess(id));
  } catch (error) {
    dispatch(deleteProductError(error.message));
  }
};

export default {
  searchProducts,
  addUserProduct,
  deleteUserProduct,
};
