import classes from 'classnames';
import { Link, NavLink } from 'react-router-dom';
import styles from './left-menu.module.css';
import { ROUTES } from 'router/routes';
import { useContext } from 'react';
import { LanguageContext } from 'features/context/i18n';



export const Sidebar = () => {
  const i18nData  =  useContext(LanguageContext);

  console.log('sidebar render');

  if(!i18nData) return null

  const { lacales } = i18nData

  return (
    <nav className={styles.leftMenu}>
      <div>
        <NavLink to={ROUTES.ROOT} className={({isActive}) => classes(styles.menuItem, {[styles.active]: isActive })}>
          <span>{lacales.events}</span>
        </NavLink>
        <NavLink to={ROUTES.CHAMPIONSHIPS} className={({isActive}) => classes(styles.menuItem, {[styles.active]: isActive })}>
          <span>{lacales.championsips}</span>
        </NavLink>
        <NavLink to={ROUTES.PARTICIPATION} className={({isActive}) => classes(styles.menuItem, {[styles.active]: isActive })}>
          <span>{lacales.registration}</span>
        </NavLink>
        

        <div className={styles.menuItem}>
          <a>{lacales.orders}</a>
        </div>
        <div className={styles.menuItem}>
          <a>{lacales.evaluations}</a>
        </div>
        <div className={styles.menuItem}>
          <a>{lacales.my_championships}</a>
        </div>
        <div className={styles.menuItem}>
          <a>{lacales.my_clubs}</a>
        </div>
        <div className={styles.menuItem}>
          <a>{lacales.teams}</a>
        </div>
        <div className={styles.menuItem}>
          <a>{lacales.traning}
          <hr></hr>
          </a>
        </div>
        <div className={styles.menuItem}>
          <a>Настройки</a>
        </div>
        <NavLink
          to={ROUTES.MEMO_EXAMPLE}
          className={({ isActive }) => classes(styles.menuItem, { [styles.active]: isActive })}
        >
          <span>Результаты</span>
        </NavLink>
      </div>
    </nav>
  );
};
