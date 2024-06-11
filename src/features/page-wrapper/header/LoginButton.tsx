import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../router/routes';
import { useAppDispatch } from '../../../store';
import { clearUserData, getToken, getUserAvatar } from '../../../store/userData/types';
import { STORAGE_KEYS, clearStorageItem } from '../../..';
import styles from './header.module.css';


export const LoginButton = () => {
  const dispatch = useAppDispatch();
  const token = useSelector(getToken);
  const avatar = useSelector(getUserAvatar);

  const logoutHandler = () => {
    dispatch(clearUserData());
    clearStorageItem(STORAGE_KEYS.USER_DATA);
  };

  if (token)
    return (
      <>
        {avatar && <img className={styles.avatar} src={avatar} alt="avatar" />}

        {token && <button className={styles.newPostButton}>
          Выйти
        </button>}
      </>
    );

  return (
    <Link to={ROUTES.AUTH} className={styles.newPostButton}>
      Войти
    </Link>
  );
};
