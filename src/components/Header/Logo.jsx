import { useDevice } from '../../hooks/useDevice';
import { Link } from 'react-router-dom';

import LogoMobile from '../../images/logoMobile.png';
import LogoTablet from '../../images/logoTablet.png';
import LogoDesctop from '../../images/logoDesctop.png';

import styles from './Header.module.css';

const Logo = () => {
  const { isMobileDevice, isDesctopDevice, isTabletDevice } = useDevice();
  const isLogged = true;

  return (
    <Link to='/'>
      {isMobileDevice && !isLogged && <img src={LogoMobile} alt='logo' />}
      {isMobileDevice && isLogged && <img src={LogoTablet} alt='logo' />}
      {isTabletDevice && <img src={LogoTablet} alt='logo' />}
      {isDesctopDevice && (
        <img className={styles.logoDesc} src={LogoDesctop} alt='logo' />
      )}
    </Link>
  );
};

export default Logo;
