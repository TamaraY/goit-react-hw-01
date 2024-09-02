import friendStyles from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={friendStyles.friendItem}>
      <div>
        <img
          className={friendStyles.friendImg}
          src={avatar}
          alt={`${name}'s avatar`}
          width="48"
        />
        <p className={friendStyles.friendName}>{name}</p>

        {isOnline ? (
          <p className={friendStyles.online}>Online</p>
        ) : (
          <p className={friendStyles.offline}> Offline</p>
        )}
      </div>
    </li>
  );
};

export default FriendListItem;
