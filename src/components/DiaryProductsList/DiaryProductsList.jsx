import React from 'react';
import Container from '../Container/Container';
import stylesContainer from '../Container/Container.module.css';
import styles from '../DiaryProductsList/DiaryProductsList.module.css';
import DiaryProductsListItem from './DiaryProductsListItem/DiaryProductsListItem';

const DiaryProductsList = () => {
  return (
    // <Container>
      <ul className={styles.listProducts}>
        <DiaryProductsListItem />
      </ul>
    // </Container>
  );
};

export default DiaryProductsList;

// style={{paddingRight: 0}}
// className={stylesContainer.container}
