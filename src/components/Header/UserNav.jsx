import { NavLink } from 'react-router-dom';

import styles from './Header.module.css';

const UserNav = () => {
  return (
    <div className={styles.userNav}>
      <NavLink
        to='/diary'
        className={styles.burgerLink}
        activeClassName={styles.burgerLinkActive}
      >
        ДНЕВНИК
      </NavLink>
      <NavLink
        to='/calculator'
        className={styles.burgerLink}
        activeClassName={styles.burgerLinkActive}
      >
        КАЛЬКУЛЯТОР
      </NavLink>
    </div>
  );
};

export default UserNav;
