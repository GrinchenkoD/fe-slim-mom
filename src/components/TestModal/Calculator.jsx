import React, { useState } from 'react';

import AddProductForm from '../AddProductForm/AddProductForm';
import CalendarInput from '../CalendarInput/CalendarInput';
// import Button from '../../shared/button/Button'; // ! not working if I use shared component 'Button'!
import Modal from '../Modal/Modal';
import styles from './Calculator.module.css';
import Summary from '../Summary/Summary';
import DailyCalories from '../ModalDailyCalories/ModalDailyCalories';
import isModalOpenSelector from '../../redux/modal/modalSelector';
import { useDispatch, useSelector } from 'react-redux';
import modalActions from '../../redux/modal/modalActions';

const Calculator = () => {
  const dispatch = useDispatch();
  const modalState = useSelector(isModalOpenSelector);
  const onOpenModal = () => {
    dispatch(modalActions.modalOpen());
  };

  const onCloseModal = () => {
    dispatch(modalActions.modalClose());
  };
  return (
    <div>
      <h2>CALCULATOR</h2>
      <button
        type="button"
        className={styles.startDietBtn}
        onClick={onOpenModal}
      >
        Похудеть
      </button>
      <CalendarInput />
      <AddProductForm />
      <Summary />

      {/* <Button onClick={onOpenModal}>Похудеть</Button>  */}
      {/* ! not working if I use shared component 'Button'! */}

      {/* {modalState && (
        <Modal onClose={onCloseModal}>
          <DailyCalories />
        </Modal>
      )} */}
    </div>
  );
};

export default Calculator;
