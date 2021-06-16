import { useDevice } from '../../hooks/useDevice';
import { Link } from 'react-router-dom';

import LogoMobile from '../../images/logoMobile.png';
import LogoTablet from '../../images/logoTablet.png';
import LogoDesctop from '../../images/logoDesctop.png';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import productsOperations from '../../redux/products/productsOperations';

import styles from './Header.module.css';
import getDate from '../../redux/date/dateSelector';

const Logo = () => {
  const { isMobileDevice, isDesctopDevice, isTabletDevice } = useDevice();
  const isLogged = false;

  //!
const dispatch = useDispatch()
  const date = useSelector(getDate)
  useEffect(()=>{dispatch(productsOperations.prouctsDayInfo(date))}, [dispatch, date])
  //!

  return (
    <Link to='/'>
      {isMobileDevice && !isLogged && (
        <img className={styles.logoMob} src={LogoMobile} alt='logo' />
      )}
      {isMobileDevice && isLogged && (
        <img className={styles.logoMob} src={LogoTablet} alt='logo' />
      )}
      {isTabletDevice && (
        <img className={styles.logoTab} src={LogoTablet} alt='logo' />
      )}
      {isDesctopDevice && (
        <img className={styles.logoDesc} src={LogoDesctop} alt='logo' />
      )}
    </Link>
  );
};

export default Logo;
