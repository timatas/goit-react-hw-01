import css from "./FriendListItem.module.css";
import clsx from "clsx";
export const FriendListItem = ({ friend: { name, avatar, isOnline } }) => {
  const statusClass = isOnline ? css.isOnline : css.isOffline;
  return (
    <>
      <div className="item">
        <img className="avatar" src={avatar} alt="Avatar" width="48" />
        <p className="name">{name}</p>
        <p className={statusClass}>{isOnline ? "Online" : "Offline"}</p>
      </div>
    </>
  );
};
