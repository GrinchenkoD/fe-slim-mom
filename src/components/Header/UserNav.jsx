import { NavLink } from 'react-router-dom';

import styles from './Header.module.css';

const UserNav = () => {

  const normalizeOverflow = () => {
    document.body.style.overflow = ''
  }
  return (
    <div className={styles.userNav}>
      <NavLink
        to='/diary'
        className={styles.burgerLink}
        activeClassName={styles.burgerLinkActive}
        onClick={normalizeOverflow}
      >
        ДНЕВНИК
      </NavLink>
      <NavLink
        to='/calculator'
        className={styles.burgerLink}
        activeClassName={styles.burgerLinkActive}
        onClick={normalizeOverflow}
      >
        КАЛЬКУЛЯТОР
      </NavLink>
    </div>
  );
};

export default UserNav;
