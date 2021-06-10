import { NavLink } from 'react-router-dom';

import styles from './Header.module.css';

const UserNav = () => {
  return (
    <>
      <NavLink
        to='/:id2'
        className={styles.burgerLink}
        activeClassName={styles.burgerLinkActive}
      >
        ДНЕВНИК
      </NavLink>
      <NavLink
        to='/:id'
        className={styles.burgerLink}
        activeClassName={styles.burgerLinkActive}
      >
        КАЛЬКУЛЯТОР
      </NavLink>
    </>
  );
};

export default UserNav;
