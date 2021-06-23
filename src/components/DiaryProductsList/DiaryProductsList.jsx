import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useDevice } from '../../hooks/useDevice';

import prouctsOperations from '../../redux/products/productsOperations';
import getDate from '../../redux/date/dateSelector';
import { getUserDailyProducts } from '../../redux/products/productsSelectors';
import modalActions from '../../redux/modal/modalActions';

import styles from '../DiaryProductsList/DiaryProductsList.module.css';
import DiaryProductsListItem from './DiaryProductsListItem/DiaryProductsListItem';
import sprite from '../../icons/symbol-defs.svg';


const DiaryProductsList = () => {
  const dispatch = useDispatch();
  const { isMobileDevice } = useDevice();

  const date = useSelector(getDate);
  const onOpenModal = () => {
    dispatch(modalActions.modalOpen());
  };

  // const onCloseModal = () => {
  //   dispatch(modalActions.modalClose());
  // };
  useEffect(() => {
    dispatch(prouctsOperations.prouctsDayInfo(date));
  }, [dispatch, date]);

  const userDailyProducts = useSelector(getUserDailyProducts);

  return (
    <>
      <ul className={styles.listProducts}>
        {userDailyProducts.map(product => (
          <DiaryProductsListItem key={product.id} product={product} />
        ))}
      </ul>
      {isMobileDevice && (
        <button onClick={onOpenModal} className={styles.button} type="submit">
          <svg className={styles.svg}>
            <use href={sprite + '#icon-plus'}></use>
          </svg>
        </button>
      )}
    </>
  );
};

export default DiaryProductsList;
