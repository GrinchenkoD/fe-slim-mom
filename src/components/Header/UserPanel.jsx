import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getLogout } from '../../redux/auth/authOperations';


import styles from './Header.module.css';
import { authSelectors } from '../../redux/auth/authselectors';

const UserPanel = () => {
  const dispatch = useDispatch();
  const onLogOut = () => {
    dispatch(getLogout());
  };
  const login = useSelector(authSelectors.login)
  return (
    <div className={styles.userPanel}>
      <span className={styles.nic}>{ login}</span>
      <Link to='/' className={styles.logout} onClick={onLogOut}>
        Выйти
      </Link>
    </div>
  );
};

export default UserPanel;
