// import PropTypes from 'prop-types';
import FriendListItem from 'components/FriendListItem/FriendListItem'

export default function FriendList({friends}) {
return(
    <ul class="list">
        {friends.map(friend => (
            <FriendListItem friends={friend } key={friend.id} />
        ))}
    </ul>
)}
// {isOnline ? 'odccd' : 'cecece'}