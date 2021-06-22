import React from 'react';
import styles from './DailyCalories.module.css';


const DailyCalories = ({dailyCalories, forbidenCategories, handleClickStartDiet}) => {
  // const DailyCalories = ({params}) => { // to be received from calculated back-end
  return (
    <div className={styles.container}>
      <p className={styles.calories__title}>
        Ваша рекомендуемая суточная <br />
        норма калорий составляет
      </p>

      <p className={styles.calories__number}>
        {dailyCalories}
        <span className={styles.calories__text}> ккал</span>
      </p>

      <p className={styles.calories__list_title}>
        Продукты, которые вам <br />
        не рекомендуется употреблять
      </p>
      <ol className={styles.calories__list}>
        {forbidenCategories.map(category=><li key={category} className={styles.calories__list_item}>{category}</li>) }
       
      </ol>

      <button
        type="button"
        className={styles.startDietBtn}
        onClick={handleClickStartDiet}
      >
        Начать худеть
        </button>
    </div>
  );
};

export default DailyCalories;
