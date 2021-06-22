import { useDevice } from '../../hooks/useDevice';
import { Link } from 'react-router-dom';

import LogoMobile from '../../icons/logo/logo-mobile.svg';
import LogoTablet from '../../icons/logo/logo-tablet.svg';
import LogoDesctop from '../../icons/logo/logo-desctop.svg';
import {useSelector } from 'react-redux';
import { authSelectors } from "../../redux/auth/authselectors"

import styles from './Header.module.css';


const Logo = () => {
  const { isMobileDevice, isDesctopDevice, isTabletDevice } = useDevice();
  const isLogged = useSelector(authSelectors.isAuthenticated);

  const normalOverflow = () => {
 document.body.style.overflow=""
  }
  return (
    <Link to='/' onClick={normalOverflow}>
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
