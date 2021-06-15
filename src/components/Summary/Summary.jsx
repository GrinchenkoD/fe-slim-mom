import React from 'react';
import styles from './Summary.module.css';

function Summary() {
  return (
    <div className={styles.summaryWrapper}>
      <div>
        <h3 className={styles.summaryHeader}>Сводка за </h3>
        <ul>
          <li>
            <span className={styles.summaryInfo}>Осталось</span>
            <span></span>
          </li>
          <li>
            <span className={styles.summaryInfo}>Употребленно</span>
            <span></span>
          </li>
          <li>
            <span className={styles.summaryInfo}>Дневная норма</span>
            <span className={styles.summaryInfo}></span>
          </li>
          <li>
            <span className={styles.summaryInfo}>n% от нормы</span>
            <span className={styles.summaryInfo}></span>
          </li>
        </ul>
      </div>
      <div>
        <h3 className={styles.summaryHeader}>Нерекомендуемые продукты</h3>
        <span className={styles.summaryInfo}>
          Здесь будет отображаться ваш рацион
        </span>
      </div>
    </div>
  );
}

export default Summary;
