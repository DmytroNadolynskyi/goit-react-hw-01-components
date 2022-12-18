import PropTypes from 'prop-types';
import {Card,Status,UserName} from './FriendListItem.styled'

export default function FriendListItem({friends}) {
return(
    <Card>
        <Status onlineStatus={friends.isOnline}></Status>
        <img  src={friends.avatar} alt="User avatar" width="48" />
        <UserName>{friends.name }</UserName>
    </Card>
)}

FriendListItem.propTypes = {
    friends: PropTypes.shape(
        {
            isOnline: PropTypes.bool.isRequired,
            avatar: PropTypes.string.isRequired,
            name:PropTypes.string.isRequired,
        }).isRequired
}