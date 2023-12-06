export const FriendListItem = ({ id, avatar, name, isOnline }) => {
  return (
    <li key={id} className="item">
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatar} alt={name} width={80} />
      <p className="name">{name}</p>
    </li>
  );
};
