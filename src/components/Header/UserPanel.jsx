import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const UserPanel = () => {
  return (
    <div className={styles.userPanel}>
      <span className={styles.nic}>Nic</span>
      <Link className={styles.logout} to='/'>
        Выйти
      </Link>
    </div>
  );
};

export default UserPanel;
