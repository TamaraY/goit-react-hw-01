import styles from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={styles.card}>
      <div className={styles.desc}>
        <img className={styles.avatar} src={image} alt="User avatar" />
        <p className={styles.name}> {name}</p>
        <p className={styles.tag}> @{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.statList}>
        <li>
          <span>Followers</span>
          <span className={styles.textSpan}>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span className={styles.textSpan}>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span className={styles.textSpan}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
