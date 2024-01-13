import { FriendListItem } from "../FriendListItem/FriendListItem";
import "./FriendList.module.css";
import clsx from "clsx";
export const FriendList = ({ friends }) => {
  return (
    <>
      {friends.length > 0 && (
        <ul className="friend-list">
          {friends.map((friend) => (
            <li key={friend.id}>
              <FriendListItem friend={friend} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
