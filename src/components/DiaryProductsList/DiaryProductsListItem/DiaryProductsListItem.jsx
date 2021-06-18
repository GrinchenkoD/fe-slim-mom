import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './DiaryProductsListItem.module.css';
import sprite from '../../../icons/symbol-defs.svg';
import prouctsOperations from '../../../redux/products/productsOperations';
import getDate from '../../../redux/date/dateSelector';

const DiaryProductsListItem = ({ product }) => {
  const dispatch = useDispatch();

  const date = useSelector(getDate);

  const { id, title, weight, calories } = product;

  const deleteProduct = () =>
    dispatch(prouctsOperations.deleteUserProduct({ id, date }));

  return (
    <li className={styles.item}>
      <span className={styles.prodName}>{title}</span>
      <span className={styles.prodWeight}>{weight} г</span>
      <span className={styles.prodKCal}>{Math.round(calories)} кал</span>
      <button type="button" className={styles.btn} onClick={deleteProduct}>
        <svg className={styles.icon}>
          <use href={sprite + '#icon-cross'} />
        </svg>
      </button>
    </li>
  );
};

export default DiaryProductsListItem;
