import { FriendListItem } from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";

export const FriendList = ({ friends }) => {
  return (
    <>
      {friends.length > 0 && (
        <ul className={css.friendList}>
          {friends.map((friend) => (
            <li key={friend.id} className={css.friendListItem}>
              <FriendListItem friend={friend} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
