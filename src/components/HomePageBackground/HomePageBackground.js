import React from 'react';
import styles from './HomePageBackground.module.css';

const HomePageBackground = ({ children }) => {
  return <div className={styles.thumb}>{children}</div>;
};

export default HomePageBackground;
