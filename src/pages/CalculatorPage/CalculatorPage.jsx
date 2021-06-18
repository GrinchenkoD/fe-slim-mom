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

const calcTitle = 'Узнай свою суточную норму калорий';

const CalculatorPage = () => {
  const dailyCalories = useSelector(authSelectors.dailyCaloriesRate);
  const forbidenCategories = useSelector(authSelectors.forbidenCategories);
  const isModalOpen = useSelector(isModalOpenSelector);
  const loading = useSelector(isLoading);

  const dispatch = useDispatch();
  const history = useHistory();

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
      <Container>
        <Calculator title={calcTitle} onSubmit={onSubmit} />
        {isModalOpen && !loading && (
          <Modal
            onClose={onCloseModal}
            dailyCalories={dailyCalories}
            forbidenCategories={forbidenCategories}
            handleClickStartDiet={handleClickStartDiet}
          />
        )}
        <Summary />
      </Container>
    </>
  );
};

export default CalculatorPage;
