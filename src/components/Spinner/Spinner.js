import React from 'react';
import Loader from 'react-loader-spinner';

import styles from './Spinnner.module.css';

const Spinner = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.spinnerContainer}>
        <Loader
          type="ThreeDots"
          color="#FC842D"
          height={100}
          width={100}
          timeout={3000}
        />
      </div>
    </div>
  );
};

export default Spinner;
