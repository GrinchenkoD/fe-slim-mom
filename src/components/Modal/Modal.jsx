import React, { useEffect } from 'react';
// import { useParams } from 'react-router';
import DailyCalories from '../DailyCalories/DailyCalories';
import styles from './Modal.module.css';

const Modal = ({ onClose }) => {
  //   const params = useParams();

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      console.log(e.code);
      onClose();
      changeScrollStyle();
    }
  };

  const handleBackDrop = e => {
    if (e.currentTarget === e.target) {
      onClose();
      changeScrollStyle();
    }
  };

  const handleClickOnCloseBtn = e => {
    e.target.nodeName === 'BUTTON' && onClose();
    changeScrollStyle();
  };

  const changeScrollStyle = () => {
    document.querySelector('body').style.overflow = 'unset';
  };

  return (
    <div className={styles.overlay} onClick={handleBackDrop}>
      <div className={styles.modal}>
        <DailyCalories />
        {/* <DailyCalories params={params} /> */}

        <button
          type="button"
          className={styles.closeBtn}
          onClick={handleClickOnCloseBtn}
        ></button>
      </div>
    </div>
  );
};

export default Modal;

/* 
--- parent component to be added ---: 

import React, { useState } from 'react';
import Modal from '../(path)/components/Modal/Modal';


const [modal, setModal] = useState(false);


<div className={styles.showModal}>
              
                <button
                  type="button"
                  onClick={() => setModal(true)}
                  className={styles.btnModal}
                >
                  <img src={} alt="" className={styles.btnModalIcon} />
                </button>
              )}
              {modal && (
                <Modal onClose={() => setModal(false)} />
              )}
            </div>
*/
