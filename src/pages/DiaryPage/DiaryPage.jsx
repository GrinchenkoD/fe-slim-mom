import React from 'react';
import styles from './DiaryPage.module.css';
import DiaryProductsList from '../../components/DiaryProductsList/DiaryProductsList';
import Container from '../../components/Container/Container';
import Summary from '../../components/Summary/Summary';
import AddProductForm from '../../components/AddProductForm/AddProductForm';
import CalendarInput from '../../components/CalendarInput/CalendarInput';

const DiaryPage = () => {
  return (
    <Container>
      <div className={styles.wrapper}>
        <div className={styles.boxMain}>
          <div className={styles.boxCalendarInput}>
            <CalendarInput />
          </div>
          <div className={styles.boxAddProductForm}>
            <AddProductForm />
          </div>
          <DiaryProductsList />
        </div>
        <Summary />
      </div>
    </Container>
  );
};

export default DiaryPage;
