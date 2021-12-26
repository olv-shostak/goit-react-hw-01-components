import PropTypes from 'prop-types';
import { ProfileCont, Description, AvatarImg, UserName, UserTag, UserLocation, StatsList, StatsItem, StatsLabel, StatsQuantity } from './Profile.styled'


function Profile(props) {
  return (
    <ProfileCont>
      <Description>
        <AvatarImg src={props.avatar} alt="User avatar" />
        <UserName>{props.username}</UserName>
        <UserTag>@{props.tag}</UserTag>
        <UserLocation>{props.location}</UserLocation>
      </Description>

      <StatsList>
        <StatsItem>
          <StatsLabel>Followers</StatsLabel>
          <StatsQuantity>{props.stastFolowers}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <StatsLabel>Views</StatsLabel>
          <StatsQuantity>{props.statsViews}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <StatsLabel>Likes</StatsLabel>
          <StatsQuantity>{props.statsLikes}</StatsQuantity>
        </StatsItem>
      </StatsList>
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
