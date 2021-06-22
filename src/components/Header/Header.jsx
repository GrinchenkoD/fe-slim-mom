import { useState } from 'react';
import Container from '../Container/Container';
import Logo from './Logo';
import { useSelector, useDispatch } from 'react-redux';
import AuthNav from './AuthNav';
import BurgerMenu from './BurgerMenu';
import UserNav from './UserNav';
import UserPanel from './UserPanel';
import { useDevice } from '../../hooks/useDevice';
import { authSelectors } from '../../redux/auth/authselectors';
import sprite from "../../icons/symbol-defs.svg"
import isModalOpenSelector from '../../redux/modal/modalSelector';

import styles from './Header.module.css';
import modalActions from '../../redux/modal/modalActions';





const Header = () => {
  const { isMobileDevice, isTabletDevice, isDesctopDevice } = useDevice();

  const [burgerShown, setBurgerShown] = useState(false);
  const isLogged = useSelector(authSelectors.isAuthenticated);
  const isModalOpen = useSelector(isModalOpenSelector);
 const dispatch = useDispatch()

  const toggleBurgerMenu = () => {
    // !burgerShown ? document.body.style.overflow = 'hidden': document.body.style.overflow = '';
    setBurgerShown(!burgerShown);

  };

  const handleBackBtn = () => {
    dispatch(modalActions.modalClose())
    
  }


  return (
    <>
      <header className={styles.mainHeader}>
        <Container>
          <div className={styles.wraper}>
            <Logo />
            {isTabletDevice && isLogged && <UserPanel />}
            {!isLogged && <AuthNav />}
            {isLogged && (
              <button className={styles.burgerButton} onClick={toggleBurgerMenu}>
                <svg className={styles.burgerIcon}>
                  <use href={burgerShown ? sprite + "#icon-cross" : sprite + "#icon-menu"} />
                </svg>
              </button>
            )}
           
            {isLogged && isDesctopDevice && <div className={styles.navPanelThumb}>
              <UserNav />
              {isDesctopDevice && isLogged && <UserPanel />}
            </div>}
          </div>
        </Container>
      </header>

      {isLogged&& isModalOpen && isMobileDevice && !burgerShown && (
        <div className={styles.userBox}>
          <Container>
            <div className={styles.userPanelThumb}>

             <button className={styles.backBtn} onClick={handleBackBtn}>
              <svg className={styles.backIcon}>
                <use href={sprite + "#back-arrow"}/>
              </svg>
            </button>
            <UserPanel />
            </div>
          </Container>
        </div>
      )}
       {isLogged && isMobileDevice && !burgerShown && (
        <div className={styles.userBox}>
          <Container>
            
            <UserPanel />
          
          </Container>
        </div>
      )}
      {!isLogged && isMobileDevice && isModalOpen && (
        <div className={styles.userBox}>
          <Container>
            <button className={styles.backBtn} onClick={handleBackBtn}>
              <svg className={styles.backIcon}>
                <use href={sprite + "#back-arrow"}/>
              </svg>
            </button>
          </Container>
        </div>
      )}

      {burgerShown && <BurgerMenu />}
    </>
  );
};

export default Header;
