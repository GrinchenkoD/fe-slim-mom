import React from 'react';
import styles from './Button.module.css';

const Button = ({ view, children, disabled=false }) => {
  return (
    <>
      {view !== 'btnReg' ? (
        <button type="submit" className={styles.button} disabled={disabled}>
          {children}
        </button>
      ) : (
        <button type="button" className={styles.buttonViewReg} disabled={disabled}>
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
