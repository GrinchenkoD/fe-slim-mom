import React from 'react';
import { useSelector } from 'react-redux';

import getDate from '../../redux/date/dateSelector';
import { getCaloriesReceived } from '../../redux/products/productsSelectors';
import { authSelectors } from '../../redux/auth/authselectors';

import styles from './Summary.module.css';


function Summary() {
  const dailyCalories = useSelector(authSelectors.dailyCaloriesRate);
  const forbidenCategories = useSelector(authSelectors.forbidenCategories);
  const caloriesReceived = useSelector(getCaloriesReceived);

  const date = useSelector(getDate).split('-').join('.');
  const categoriesString = forbidenCategories.reduce(
    (acc, item, index, arr) => {
      if (index !== arr.length - 1) {
        acc = acc + `${item}, `;
        return acc;
      }
      acc = acc + `${item}`;
      return acc;
    },
    '',
  );

  const caloriesPercent = isNaN(
    parseInt((caloriesReceived / dailyCalories) * 100),
  )
    ? 0
    : parseInt((caloriesReceived / dailyCalories) * 100);
  return (
    <div className={styles.summaryWrapper}>
      <div>
        <h3 className={styles.summaryHeader}>Сводка за {date}</h3>
        <ul className={styles.summaryData}>
          <li className={styles.summaryItem}>
            <span className={styles.summaryInfo}>Осталось</span>
            <span className={styles.summaryInfo}>
              {dailyCalories - caloriesReceived} кал
            </span>
          </li>
          <li className={styles.summaryItem}>
            <span className={styles.summaryInfo}>Употребленно</span>
            <span className={styles.summaryInfo}>{caloriesReceived} кал</span>
          </li>
          <li className={styles.summaryItem}>
            <span className={styles.summaryInfo}>Дневная норма</span>
            <span className={styles.summaryInfo}>{dailyCalories} кал</span>
          </li>
          <li className={styles.summaryItem}>
            <span className={styles.summaryInfo}>n% от нормы</span>
            <span className={styles.summaryInfo}>{caloriesPercent}%</span>
          </li>
        </ul>
      </div>
      <div className={styles.summaryCategories}>
        <h3 className={styles.summaryHeader}>Нерекомендуемые продукты</h3>
        <p className={styles.summaryInfo}>
          {forbidenCategories.length === 0
            ? 'Здесь будет отображаться ваш рацион'
            : categoriesString}
        </p>
      </div>
    </div>
  );
}

export default Summary;
