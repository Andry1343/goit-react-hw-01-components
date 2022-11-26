import styles from '../friendsList/Friends.module.css';

export const FriendsListItem = ({ id, avatar, name, isOnline }) => {
  return (
    <li key={id} className={styles.items}>
      <span className={`${styles.status} ${styles[isOnline]}`}>{isOnline}</span>
      <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};
