import classes from 'classnames';
import { Link, NavLink } from 'react-router-dom';
import styles from './left-menu.module.css';
import { ROUTES } from 'router/routes';



export const Sidebar = () => {
  return (
    <nav className={styles.leftMenu}>
      <div>
        <NavLink to={ROUTES.ROOT} className={({isActive}) => classes(styles.menuItem, {[styles.active]: isActive })}>
          <span>События</span>
        </NavLink>
        <NavLink to={ROUTES.CHAMPIONSHIPS} className={({isActive}) => classes(styles.menuItem, {[styles.active]: isActive })}>
          <span>Чемпионаты</span>
        </NavLink>
        <a className={styles.menuItem}>
          <span>Регистрация</span>
        </a>

        <div className={styles.menuItem}>
          <a>Заказы</a>
        </div>
        <div className={styles.menuItem}>
          <a>Оценки</a>
        </div>
        <div className={styles.menuItem}>
          <a>Мои чемпионаты</a>
        </div>
        <div className={styles.menuItem}>
          <a>Мои клубы</a>
        </div>
        <div className={styles.menuItem}>
          <a>Команды</a>
        </div>
        <div className={styles.menuItem}>
          <a>Тренировки
          <hr></hr>
          </a>
        </div>
        <div className={styles.menuItem}>
          <a>Изменить профиль</a>
        </div>
        <div className={styles.menuItem}>
          <a>Добавить запись</a>
        </div>
        <div className={styles.menuItem}>
          <a>Выйти</a>
        </div>
      </div>
    </nav>
  );
};
