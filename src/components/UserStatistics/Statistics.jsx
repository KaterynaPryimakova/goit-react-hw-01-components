import { generateRandomColor } from 'utils/generateRandomColor';
import css from './Statistics.module.css';

export const Statistics = ({ title = '', stats }) => {
  return (
    <section className={css.statistics}>
      {title.length > 0 && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li
            style={{
              backgroundColor: generateRandomColor(),
            }}
            className={css.statListItem}
            key={id}
          >
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
