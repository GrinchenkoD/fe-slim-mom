import React from 'react';
import styles from './DailyCalories.module.css';

const DailyCalories = () => {
  // const DailyCalories = ({params}) => { // to be received from calculated back-end
  return (
    <div className={styles.container}>
      <p className={styles.calories__title}>
        Ваша рекомендуемая суточная <br />
        норма калорий составляет
      </p>

      <p className={styles.calories__number}>
        2800
        {/* {params} */}
        <span className={styles.calories__text}> ккал</span>
      </p>

      <p className={styles.calories__list_title}>
        Продукты, которые вам <br />
        не рекомендуется употреблять
      </p>
      <ol className={styles.calories__list}>
        <li className={styles.calories__list_item}>Мучные продукты</li>
        <li className={styles.calories__list_item}>Молоко</li>
        <li className={styles.calories__list_item}>Красное мясо</li>
        <li className={styles.calories__list_item}>Копчености</li>
      </ol>

      <button
        type="button"
        className={styles.startDietBtn}
        // onClick={handleClickStartDiet}
      >
        Начать худеть
      </button>
    </div>
  );
};

export default DailyCalories;
