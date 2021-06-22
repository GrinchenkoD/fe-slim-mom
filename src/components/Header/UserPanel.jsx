import { useDispatch, useSelector } from 'react-redux';
import authOperations from '../../redux/auth/authOperations';

import styles from './Header.module.css';
import { authSelectors } from '../../redux/auth/authselectors';


const UserPanel = () => {
  const dispatch = useDispatch();
  const onLogOut = () => {
    dispatch(authOperations.getLogout());
  };
  const login = useSelector(authSelectors.login)
  return (
    <div className={styles.userPanel}>
      <span className={styles.nic}>{login}</span>
      <button className={styles.logout} onClick={onLogOut}>
        Выйти
      </button>
    </div>
  );
};

export default UserPanel;
