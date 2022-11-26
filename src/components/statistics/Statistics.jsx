import PropTypes from 'prop-types';
import styles from '../statistics/Statistics.module.css';

export const Statistics = ({ stats, title}) => {
  return (
    <section className={styles.statistics}>
        {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.statList}>
        {stats.map(stats => (
          <li key={stats.id} className={styles.item}>
            <span className={styles.label}>{stats.label}</span>
            <span className={styles.percentage}>{stats.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
