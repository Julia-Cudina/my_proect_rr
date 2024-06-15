import logo from 'assets/images/logo.jpg';
import { ChangeEvent } from 'react';
import { LoginButton } from './LoginButton';
import styles from './header.module.css';


export const Header = ({ onSearchChange }: { onSearchChange?: (e: ChangeEvent<HTMLInputElement>) => void }) => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.leftSection}>
        <img className={styles.logo} src={logo} alt="logo" />
      </div>
      <div className={styles.centerSection}>
        <input type="text" placeholder="Поиск" className={styles.searchInput} onChange={onSearchChange} />
        <button className={styles.newPostButton}>Новый пост</button>
      </div>
      <div className={styles.centerSection}>
        <button className={styles.PostButton}>Результаты</button>
      </div>
      <div className={styles.centerSection}>
        <button className={styles.PostButton}>Мои документы</button>
      </div>
      <div className={styles.centerSection}>
        <button className={styles.PostButton}>Фото</button>
      </div>
      <div className={styles.centerSection}>
        <button className={styles.PostButton}>Клубы</button>
      </div>
      <div className={styles.centerSection}>
        <button className={styles.PostButton}>Журнал</button>
      </div>
      

      <div className={styles.rightSection}>
        <LoginButton />
      </div>
    </header>
  );
};
