import "./Profile.module.css";
import clsx from "clsx";
export const Profile = ({
  user: { username, tag, location, avatar, stats },
}) => {
  return (
    <>
      <div className="profile">
        <div className="description">
          <img
            src={avatar}
            width="80"
            height="80"
            alt="User avatar"
            className="avatar"
          />
          <p className="name">{username}</p>
          <p className="tag">{tag}</p>
          <p className="location">{location}</p>
        </div>

        <ul className="stats">
          <li>
            <span className="label">Followers</span>
            <span className="value">{stats.followers}</span>
          </li>
          <li>
            <span className="label">Views</span>
            <span className="value">{stats.views}</span>
          </li>
          <li>
            <span className="label">Likes</span>
            <span className="value">{stats.likes}</span>
          </li>
        </ul>
      </div>
    </>
  );
};
