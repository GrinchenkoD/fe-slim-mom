import React from 'react';
import styles from './CalculatorPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Calculator from '../../components/Calculator/Calculator';
import Container from '../../components/Container/Container';
import Summary from '../../components/Summary/Summary';
import { authSelectors } from '../../redux/auth/authselectors';
import productsOperations from '../../redux/products/productsOperations';
import modalActions from '../../redux/modal/modalActions';
import isModalOpenSelector from '../../redux/modal/modalSelector';
import Modal from '../../components/Modal/Modal';
import isLoading from '../../redux/loading/loadingSelector';
import Header from '../../components/Header/Header';

import leafTab from '../../images/product/leafTab.png'
import leafDesk from '../../images/product/leafDesk.png'

import { useDevice } from '../../hooks/useDevice';

const calcTitle = 'Узнай свою суточную норму калорий';

const CalculatorPage = () => {
  const dailyCalories = useSelector(authSelectors.dailyCaloriesRate);
  const forbidenCategories = useSelector(authSelectors.forbidenCategories);
  const isModalOpen = useSelector(isModalOpenSelector);
  const loading = useSelector(isLoading);

  const dispatch = useDispatch();
  const history = useHistory();

  const { isMobileDevice, isTabletDevice, isDesctopDevice } = useDevice();

  const onOpenModal = () => {
    dispatch(modalActions.modalOpen());
  };
  const onCloseModal = () => {
    dispatch(modalActions.modalClose());
  };

  const onSubmit = (values, { resetForm }) => {
    dispatch(productsOperations.dailyRatePrivate(values));
    onOpenModal();
    resetForm();
  };

  const handleClickStartDiet = () => {
    onCloseModal();
    history.push('/diary');
  };

  return (
    <>
      {isMobileDevice || isTabletDevice ? (
        <div className={styles.bg}>
            <img className={styles.leafTab} src={leafTab} alt='' />
          <Header />
          <Container>
            <div className={styles.wrapper}>
              <div className={styles.boxCalculator}>
                <Calculator title={calcTitle} onSubmit={onSubmit} />
              </div>
              {isModalOpen && !loading && (
                <Modal
                  onClose={onCloseModal}
                  dailyCalories={dailyCalories}
                  forbidenCategories={forbidenCategories}
                  handleClickStartDiet={handleClickStartDiet}
                />
              )}
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
            <img className={styles.leafTab} src={leafDesk} alt='' />
          <Header />
          <Container>
            <div className={styles.wrapper}>
              <div className={styles.boxCalculator}>
                <Calculator title={calcTitle} onSubmit={onSubmit} />
              </div>
              {isModalOpen && !loading && (
                <Modal
                  onClose={onCloseModal}
                  dailyCalories={dailyCalories}
                  forbidenCategories={forbidenCategories}
                  handleClickStartDiet={handleClickStartDiet}
                />
              )}
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

export default CalculatorPage;
