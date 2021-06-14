import axios from 'axios';
import actions from './productsActions';

const {
  searchPoductRequest,
  searchPoductSuccess,
  searchPoductError,
  addPoductRequest,
  addPoductSuccess,
  addPoductError,
} = actions;

const searchProducts = searchQuerry => dispatch => {
  dispatch(searchPoductRequest());
  axios
    .get(`products/${searchQuerry}`)
    .then(({ data }) => {
      dispatch(searchPoductSuccess(data));
    })
    .catch(error => dispatch(searchPoductError(error)));
};

const addUserProduct = productData => dispatch => {
  dispatch(addPoductRequest());
  axios
    .post('/products/add', productData)
    .then(({ data }) => {
      dispatch(addPoductSuccess(data));
    })
    .catch(error => dispatch(addPoductError(error)));
};

export default {
  searchProducts,
  addUserProduct,
};
