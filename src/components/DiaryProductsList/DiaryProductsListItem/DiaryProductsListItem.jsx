import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './DiaryProductsListItem.module.css';
import sprite from '../../../icons/symbol-defs.svg';

const DiaryProductsListItem = ({ product }) => {
  const { _id, title, weight, kcal } = product;

  const dispatch = useDispatch();

  return (
    <li className={styles.item}>
      <span className={styles.prodName}>{title}</span>
      <span className={styles.prodWeight}>{weight} г</span>
      <span className={styles.prodKCal}>{Math.floor(kcal)} ккал</span>
      <button type="button" className={styles.btn}>
        <svg className={styles.icon}>
          <use href={sprite + '#icon-cross'} />
        </svg>
      </button>
    </li>
  );
};

export default DiaryProductsListItem;
