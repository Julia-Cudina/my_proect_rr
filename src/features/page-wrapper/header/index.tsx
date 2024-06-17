import logo from 'assets/images/logo.jpg';
import { ChangeEvent, useContext } from 'react';
import { LoginButton } from './LoginButton';
import styles from './header.module.css';
import Select from 'react-select';
import { LanguageContext } from 'features/context/i18n';
import { LANGUAGES } from 'shared/types/i18n';


export const Header = ({ onSearchChange }: { onSearchChange?: (e: ChangeEvent<HTMLInputElement>) => void }) => {
  const i18nData = useContext(LanguageContext);

  if (!i18nData) return null;
  const {language, setLanguage} = i18nData

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
        <Select options={[
          {value: LANGUAGES.EN, label: LANGUAGES.EN}, 
          {value: LANGUAGES.RU, label: LANGUAGES.RU},
          ]}
          value={{label: language, value: language }} 
          onChange={val => {
            if (val) {
              setLanguage(val.value);
            }
          }}
          />
        <LoginButton />
      </div>
    </header>
  );
};
