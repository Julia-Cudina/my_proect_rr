import { ChangeEvent, FormEvent, useState } from 'react';
import styles from './loginForm.module.css';

export const LoginForm = () => {
  const [forrmState, setFormState] = useState({ email: '', password: '' });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handeSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

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
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};
