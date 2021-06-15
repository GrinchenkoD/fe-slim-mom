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
  const nickname = useSelector(authSelectors.nickname)
  return (
    <div className={styles.userPanel}>
      <span className={styles.nic}>{ nickname}</span>
      <Link to='/' className={styles.logout} onClick={onLogOut}>
        Выйти
      </Link>
    </div>
  );
};

export default UserPanel;
