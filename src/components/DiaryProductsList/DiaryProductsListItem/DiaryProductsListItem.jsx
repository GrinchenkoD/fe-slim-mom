import React from 'react';
import styles from './DiaryProductsListItem.module.css';
import sprite from '../../../icons/symbol-defs.svg';

const DiaryProductsListItem = ({}) => {
  return (
    <li className={styles.item}>
      <span className={styles.prodName}>Макароны </span>
      <span className={styles.prodWeight}>100 г</span>
      <span className={styles.prodKCal}>320 ккал</span>
      <button type="button" className={styles.btn}>
        <svg className={styles.icon}>
          <use href={sprite + '#icon-cross'} />
        </svg>
      </button>
    </li>
  );
};

export default DiaryProductsListItem;
