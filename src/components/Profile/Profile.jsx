import "./Profile.module.css";
import css from "./Profile.module.css";

export const Profile = ({
  user: { username, tag, location, avatar, stats },
}) => {
  return (
    <>
      <div className={css.profile}>
        <div className={css.description}>
          <img
            src={avatar}
            width="80"
            height="80"
            alt="User avatar"
            className={css.avatar}
          />
          <p className={css.name}>{username}</p>
          <p className={css.tag}>&#64;{tag}</p>
          <p className={css.location}>{location}</p>
        </div>

        <ul className={css.stats}>
          <li className={css.statsItem}>
            <span className={css.statsLabel}>Followers</span>
            <span className={css.statsValue}>{stats.followers}</span>
          </li>
          <li className={css.statsItem}>
            <span className={css.statsLabel}>Views</span>
            <span className={css.statsValue}>{stats.views}</span>
          </li>
          <li className={css.statsItem}>
            <span className={css.statsLabel}>Likes</span>
            <span className={css.statsValue}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </>
  );
};
