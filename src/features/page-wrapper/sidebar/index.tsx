import styles from './left-menu.module.css';

export const Sidebar = () => {
  return (
    <nav className={styles.leftMenu}>
      <div>
        <a className={styles.menuItem}>
          <span>Профиль</span>
        </a>
        <a className={styles.menuItem}>
          <span>Документы</span>
        </a>
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
