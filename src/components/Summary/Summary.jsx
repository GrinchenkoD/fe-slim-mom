import React from 'react';
import styles from './Summary.module.css';
import { authSelectors } from '../../redux/auth/authselectors';
import { useSelector } from 'react-redux';
import { getCaloriesReceived } from '../../redux/products/productsSelectors';
import getDate from '../../redux/date/dateSelector';
function Summary() {
  const dailyCalories = useSelector(authSelectors.dailyCaloriesRate);
  const forbidenCategories = useSelector(authSelectors.forbidenCategories);
  const caloriesReceived = useSelector(getCaloriesReceived);
  const date = useSelector(getDate).split("-").join(".");
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
  return (
    <div className={styles.summaryWrapper}>
      <div>
        <h3 className={styles.summaryHeader}>Сводка за {date}</h3>
        <ul className={styles.summaryData}>
          <li className={styles.summaryItem}>
            <span className={styles.summaryInfo}>Осталось</span>
            <span className={styles.summaryInfo}>
              {dailyCalories - caloriesReceived} ккал
            </span>
          </li>
          <li className={styles.summaryItem}>
            <span className={styles.summaryInfo}>Употребленно</span>
            <span className={styles.summaryInfo}>{caloriesReceived} ккал</span>
          </li>
          <li className={styles.summaryItem}>
            <span className={styles.summaryInfo}>Дневная норма</span>
            <span className={styles.summaryInfo}>{dailyCalories} ккал</span>
          </li>
          <li className={styles.summaryItem}>
            <span className={styles.summaryInfo}>n% от нормы</span>
            <span className={styles.summaryInfo}>
              {parseInt((caloriesReceived / dailyCalories )* 100)}% 
            </span>
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
