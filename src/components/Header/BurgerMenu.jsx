import UserNav from './UserNav';
import styles from './Header.module.css';

const BurgerMenu = () => {
  return (
    <div className={styles.burgerMenu}>
      <UserNav />
    </div>
  );
};

export default BurgerMenu;
