import { NavLink } from 'react-router-dom';

import styles from './Header.module.css';

const AuthNav = () => {
  return (
    <div className={styles.authNavContainer}>
      <NavLink
        to='/'
        className={styles.authLink}
        activeClassName={styles.authLinkActive}
      >
        ВХОД
      </NavLink>
      <NavLink
        to='/:id'
        className={styles.authLink}
        activeClassName={styles.authLinkActive}
      >
        РЕГИСТРАЦИЯ
      </NavLink>
    </div>
  );
};

export default AuthNav;
