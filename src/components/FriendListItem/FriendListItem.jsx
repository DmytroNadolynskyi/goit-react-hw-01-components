import PropTypes from 'prop-types';

export default function FriendListItem({friends}) {
return(
    <li class="item">
        <span class="status">{friends.isOnline}</span>
        <img class="avatar" src={friends.avatar} alt="User avatar" width="48" />
        <p class="name">{friends.name }</p>
    </li>
)}

FriendListItem.propTypes = {
    friends: PropTypes.shape(
        {
            isOnline: PropTypes.bool.isRequired,
            avatar: PropTypes.string.isRequired,
            name:PropTypes.string.isRequired,
        }).isRequired
}