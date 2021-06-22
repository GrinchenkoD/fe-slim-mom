import React from 'react';
import styles from './DiaryPage.module.css';
import DiaryProductsList from '../../components/DiaryProductsList/DiaryProductsList';
import Container from '../../components/Container/Container';
import Summary from '../../components/Summary/Summary';
import AddProductForm from '../../components/AddProductForm/AddProductForm';
import CalendarInput from '../../components/CalendarInput/CalendarInput';
import Header from '../../components/Header/Header';

import leafTab from '../../images/product/leafTab.png';
import leafDesk from '../../images/product/leafDesk.png';

import { useDevice } from '../../hooks/useDevice';

const DiaryPage = () => {
  const { isMobileDevice, isTabletDevice, isDesctopDevice } = useDevice();

  return (
    <>
      {isMobileDevice || isTabletDevice ? (
        <div className={styles.bg}>
          <img className={styles.leafTab} src={leafTab} alt="" />
          <Header />
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
            </div>
          </Container>
          <div className={styles.boxSummary}>
            <Container>
              <Summary />
            </Container>
          </div>
        </div>
      ) : (
        <div className={styles.bg}>
          <img className={styles.leafDesk} src={leafDesk} alt="" />
          <Header />
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
              <div className={styles.boxSummary}>
                <Summary />
              </div>
            </div>
          </Container>
        </div>
      )}
    </>
  );
};

export default DiaryPage;
