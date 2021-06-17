import React, { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
// import { useParams } from 'react-router';
import DailyCalories from '../ModalDailyCalories/ModalDailyCalories';
import styles from './Modal.module.css';

const Modal = ({ onClose, ...props }) => {
  //   const params = useParams();

  const handleKeyDown = useCallback(
    e => {
      if (e.key === 'Escape') {
        // console.log(e.key);
        // if (e.code === 'Escape') {
        return onClose && onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  const handleBackDrop = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  const handleClickOnCloseBtn = e => {
    e.target.nodeName === 'BUTTON' && onClose();
  };

  return createPortal(
    <div className={styles.overlay} onClick={handleBackDrop}>
      <div className={styles.modal}>
        <DailyCalories {...props} onClose={ onClose}/>
        {/* <DailyCalories params={params} /> */}

        <button
          type="button"
          className={styles.closeBtn}
          onClick={handleClickOnCloseBtn}
        ></button>
      </div>
    </div>,
    document.getElementById('modal-root'),
  );
};

export default Modal;
