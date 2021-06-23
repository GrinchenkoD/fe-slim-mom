import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useDevice } from '../../hooks/useDevice';

import productsOperations from '../../redux/products/productsOperations';
import { authSelectors } from '../../redux/auth/authselectors';
import isModalOpenSelector from '../../redux/modal/modalSelector';
import isLoading from '../../redux/loading/loadingSelector';
import modalActions from '../../redux/modal/modalActions';

import Calculator from '../../components/Calculator/Calculator';
import Container from '../../components/Container/Container';
import Summary from '../../components/Summary/Summary';
import Modal from '../../components/Modal/Modal';
import Header from '../../components/Header/Header';
import DailyCalories from '../../components/ModalDailyCalories/ModalDailyCalories';
import Spinner from '../../components/Spinner/Spinner';
import styles from './CalculatorPage.module.css';



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
        <div className={styles.bg}>
          <Header />
          <Container>
            <div className={styles.wrapper}>
              <div className={styles.boxCalculator}>
                <Calculator title={calcTitle} onSubmit={onSubmit} />
              </div>
              {isModalOpen && !loading && (
                <Modal
                  onClose={onCloseModal}
                >
                   <DailyCalories
                    dailyCalories={dailyCalories}
                    forbidenCategories={forbidenCategories}
                    handleClickStartDiet={handleClickStartDiet}
                  />
                </Modal>
              )}
              {isDesctopDevice&&(<div className={styles.boxSummary}>
                <Summary />
              </div>) }
            </div>
          </Container>
         {(isMobileDevice || isTabletDevice)&&  ( <div className={styles.boxSummary}>
            <Container>
              <Summary />
            </Container>
          </div>)}
        </div>
      {loading && <Spinner />}
    </>
  );
};

export default CalculatorPage;
