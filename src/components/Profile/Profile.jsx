import PropTypes from 'prop-types';
import {
  Card,
  Image,
  Description,
  UserName,
  Tag,
  Location,
  List,
  Item,
  Label,
  Quantity,
} from './Profile.styled';
export default function Profile({
  avatar,
  userName,
  tag,
  location,
  stats: { followers, views, likes },
}) {
  return (
    <Card>
      <Description>
        <Image src={avatar} alt="User avatar" width="120" />
        <UserName>{userName}</UserName>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <List>
        <Item>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </Item>
        <Item>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </Item>
        <Item>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </Item>
      </List>
    </Card>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
