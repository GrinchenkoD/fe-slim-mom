import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getLogout } from '../../redux/auth/authOperations';

import styles from './Header.module.css';

const UserPanel = () => {
  const dispatch = useDispatch();
  const onLogOut = () => {
    dispatch(getLogout());
  };
  return (
    <div className={styles.userPanel}>
      <span className={styles.nic}>Nic</span>
      <Link to='/' className={styles.logout} onClick={onLogOut}>
        Выйти
      </Link>
    </div>
  );
};

export default UserPanel;
