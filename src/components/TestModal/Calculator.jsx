import React, { useState } from 'react';
import AddProductForm from '../AddProductForm/AddProductForm';
import CalendarInput from '../CalendarInput/CalendarInput';
// import Button from '../../shared/button/Button'; // ! not working if I use shared component 'Button'!
import Modal from '../Modal/Modal';
import styles from './Calculator.module.css';
import Summary from '../Summary/Summary'
const Calculator = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const onOpenModal = () => {
    setModalOpen(true);
  };

  const onCloseModal = () => {
    setModalOpen(false);
  };
  return (
    <div>
      <h2>CALCULATOR</h2>
      <Summary />
      <button
        type="button"
        className={styles.startDietBtn}
        onClick={onOpenModal}
      >
        Похудеть
      </button>
      <CalendarInput />
      <AddProductForm />

      {/* <Button onClick={onOpenModal}>Похудеть</Button>  */}
      {/* ! not working if I use shared component 'Button'! */}

      {modalOpen && <Modal onClose={onCloseModal} />}
    </div>
  );
};

export default Calculator;
