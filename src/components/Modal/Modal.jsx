import React, { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
// import { useParams } from 'react-router';
import styles from './Modal.module.css';
import { useDispatch } from 'react-redux';
import modalActions from '../../redux/modal/modalActions';
import Container from '../Container/Container';


const Modal = ({ children, ...props }) => {
  const dispatch = useDispatch();

  const onClose = useCallback(() => {
    dispatch(modalActions.modalClose());
  }, [dispatch]);

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
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
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
      <Container>

      <div className={styles.modal}>
        <button
          type="button"
          className={styles.closeBtn}
          onClick={handleClickOnCloseBtn}
          ></button>
        {children}
      </div>
          </Container>
    </div>,
    document.getElementById('modal-root'),
  );
};

export default Modal;
