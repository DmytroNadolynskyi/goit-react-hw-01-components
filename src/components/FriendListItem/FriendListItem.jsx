import PropTypes from 'prop-types';
import { Card, Status, UserName } from './FriendListItem.styled';

export default function FriendListItem({
  friends: { isOnline, avatar, name },
}) {
  return (
    <Card>
      <Status onlineStatus={isOnline}></Status>
      <img src={avatar} alt="User avatar" width="48" />
      <UserName>{name}</UserName>
    </Card>
  );
}

FriendListItem.propTypes = {
  friends: PropTypes.shape({
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
