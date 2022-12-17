import PropTypes from 'prop-types';

export default function FriendList({url,status,userName, id}) {
return(
    <li class="item">
        <span class="status">{status}</span>
        <img class="avatar" src={url} alt="User avatar" width="48" />
        <p class="name">{userName }</p>
    </li>
)}
// {isOnline ? 'odccd' : 'cecece'}