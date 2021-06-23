import React from 'react';
import { useSelector } from 'react-redux';
import { useDevice } from '../../hooks/useDevice';

import isLoading from '../../redux/loading/loadingSelector';

import DiaryProductsList from '../../components/DiaryProductsList/DiaryProductsList';
import Container from '../../components/Container/Container';
import Summary from '../../components/Summary/Summary';
import AddProductForm from '../../components/AddProductForm/AddProductForm';
import CalendarInput from '../../components/CalendarInput/CalendarInput';
import Header from '../../components/Header/Header';
import Spinner from '../../components/Spinner/Spinner';
import styles from './DiaryPage.module.css';


const DiaryPage = () => {
  const { isMobileDevice, isTabletDevice, isDesctopDevice } = useDevice();
  const loading = useSelector(isLoading);

  return (
    <>
        <div className={styles.bg}>
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
              {isDesctopDevice && (
                <div className={styles.boxSummary}>
                <Summary />
              </div>
              )}
            </div>
          </Container>
        {(isMobileDevice || isTabletDevice) &&
          (<div className={styles.boxSummary}>
            <Container>
              <Summary />
            </Container>
          </div>)}
        </div>
          { loading&&<Spinner/>}
    </>
  );
};

export default DiaryPage;
