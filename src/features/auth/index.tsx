import { ChangeEvent, FormEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { ROUTES } from 'router/routes';
import { getIsLoading, getToken } from '../../store/userData';
import { AuthFormData } from '../../../src/store/userData/types';
import { postAuthData } from '../../../src/store/userData/effects';
import { useAppDispatch } from '../../../src/store';
import styles from './loginForm.module.css';


export const LoginForm = () => {
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getIsLoading);
  const token = useSelector(getToken);

  const [forrmState, setFormState] = useState<AuthFormData>({ email: '', password: '' });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handeSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(postAuthData(forrmState));
  };

  if (token) return <Navigate to={ROUTES.ROOT} />;

  return (
    <div className={styles.loginContainer}>
      <h2 className={styles.loginTitle}>Авторизация</h2>
      <form className={styles.loginForm} onSubmit={handeSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="username">Имя пользователя:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={forrmState.email}
            onChange={onChange}
            required
            autoComplete="off"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Пароль:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={forrmState.password}
            onChange={onChange}
            required
          />
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Обработка данных...' : 'Войти'}
        </button>
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Обработка данных...' : 'Регистрация'}
        </button>
      </form>
    </div>
  );
};
