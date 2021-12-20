import PropTypes from 'prop-types';
import { ProfileCont, Description, AvatarImg } from './Profile.styled'


function Profile(props) {
  return (
    <ProfileCont>
      <Description>
        <AvatarImg src={props.avatar} alt="User avatar" />
        <p className="name">{props.username}</p>
        <p className="tag">@{props.tag}</p>
        <p className="location">{props.location}</p>
      </Description>

      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{props.stastFolowers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{props.statsViews}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{props.statsLikes}</span>
        </li>
      </ul>
    </ProfileCont>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stastFolowers: PropTypes.number.isRequired,
  statsViews: PropTypes.number.isRequired,
  statsLikes: PropTypes.number.isRequired,
};

export default Profile;
