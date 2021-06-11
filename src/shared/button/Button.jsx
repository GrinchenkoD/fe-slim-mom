import React from 'react';
import styles from './Button.module.css';

const Button = ({ view, children }) => {
  return (
    <>
      {view !== 'btnReg' ? (
        <button type="submit" className={styles.button}>
          {children}
        </button>
      ) : (
        <button type="button" className={styles.buttonViewReg}>
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
