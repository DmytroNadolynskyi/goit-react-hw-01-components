import PropTypes from 'prop-types';
import FriendListItem from 'components/FriendListItem/FriendListItem';
import { Cards } from './FriendList.styled';

export default function FriendList({ friends }) {
  return (
    <Cards>
      {friends.map(friend => (
        <FriendListItem friends={friend} key={friend.id} />
      ))}
    </Cards>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
