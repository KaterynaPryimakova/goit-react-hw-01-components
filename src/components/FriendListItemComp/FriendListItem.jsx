import css from './FriendListItem.module.css';

export const FriendListItem = ({ id, avatar, name, isOnline }) => {
  return (
    <li key={id} className={css.item}>
      <span
        style={{
          backgroundColor: isOnline
            ? 'rgba(0, 128, 0, 0.7)'
            : 'rgba(255, 0, 0, 0.7)',
        }}
        className={css.status}
      >
        {isOnline}
      </span>
      <img className={css.avatar} src={avatar} alt={name} />
      <p className={css.name}>{name}</p>
    </li>
  );
};
