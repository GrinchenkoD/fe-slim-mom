import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../DiaryProductsList/DiaryProductsList.module.css';
import DiaryProductsListItem from './DiaryProductsListItem/DiaryProductsListItem';
import {
  getUserDailyProducts,
  getDate,
} from '../../redux/products/productsSelectors';
import  prouctsOperations  from '../../redux/products/productsOperations';


const DiaryProductsList = () => {
  const dispatch = useDispatch();

  const date = useSelector(getDate);

  useEffect(() => {
    dispatch(prouctsOperations.prouctsDayInfo(date));
  }, [dispatch, date]);

  const userDailyProducts = useSelector(getUserDailyProducts);

  return (
    <ul className={styles.listProducts}>
      {userDailyProducts.map(product => (
        <DiaryProductsListItem key={product.id} product={product} />
      ))}
    </ul>
  );
};

export default DiaryProductsList;
