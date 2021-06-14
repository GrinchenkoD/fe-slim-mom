import { useState } from 'react';
import Container from '../Container/Container';
import Logo from './Logo';
import { useSelector } from 'react-redux';
import AuthNav from './AuthNav';
import BurgerMenu from './BurgerMenu';
import UserNav from './UserNav';
import UserPanel from './UserPanel';
import { useDevice } from '../../hooks/useDevice';
import { authSelectors } from '../../redux/auth/authselectors';
import sprite from '../../icons/symbol-defs.svg';

import styles from './Header.module.css';

const Header = () => {
  const { isMobileDevice, isTabletDevice, isDesctopDevice } = useDevice();

  const [burgerShown, setBurgerShown] = useState(false);
  const isLogged = useSelector(authSelectors.isAuthenticated);

  const openBurgerMenu = () => {
    setBurgerShown(!burgerShown);
  };

  return (
    <>
      <header className={styles.mainHeader}>
        <Container>
          <div className={styles.wraper}>
            <Logo />
            {isTabletDevice && isLogged && <UserPanel></UserPanel>}
            {!isLogged && <AuthNav />}
            {isLogged && (
              <button className={styles.burgerButton} onClick={openBurgerMenu}>
                {/* {burgerShown ? 'x' : '='} */}
                <svg className={styles.burgerIcon}>
                  {burgerShown ? (
                    <use href={sprite + '#icon-cross'} />
                  ) : (
                    <use href={sprite + '#icon-menu'} />
                  )}
                </svg>
              </button>
            )}
            {isLogged && isDesctopDevice && <UserNav />}
            {isDesctopDevice && isLogged && <UserPanel />}
          </div>
        </Container>
      </header>

      {isLogged && isMobileDevice && !burgerShown && (
        <div className={styles.userBox}>
          <Container>
            <UserPanel />
          </Container>
        </div>
      )}

      {burgerShown && <BurgerMenu />}
    </>
  );
};

export default Header;
