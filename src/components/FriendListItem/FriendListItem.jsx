import css from "./FriendListItem.module.css";

export const FriendListItem = ({ friend: { name, avatar, isOnline } }) => {
  const statusClass = isOnline ? css.isOnline : css.isOffline;
  return (
    <>
      <div className="item">
        <img className="avatar" src={avatar} alt="Avatar" width="80" />
        <p className={css.nameFriend}>{name}</p>
        <p className={statusClass}>{isOnline ? "Online" : "Offline"}</p>
      </div>
    </>
  );
};
