import PropTypes from 'prop-types';
export default function Profile({ url, userName, tag, location, followers, views, likes }) {
    
    return (
        <div className="profile">
            <div className="description">
                <img
                    src={url}
                    alt="User avatar"
                    className="avatar"
                />
                <p className="name">{userName}</p>
                <p className="tag">{tag}</p>
                <p className="location">{location}</p>
            </div>

            <ul className="stats">
                <li>
                    <span className="label">Followers</span>
                    <span className="quantity">{followers}</span>
                </li>
                <li>
                    <span className="label">Views</span>
                    <span className="quantity">{views}</span>
                </li>
                <li>
                    <span className="label">Likes</span>
                    <span className="quantity">{likes}</span>
                </li>
            </ul>
        </div>
    )
};

Profile.propTypes = {
    url: PropTypes.string,
    userName: PropTypes.string,
    tag: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number]),
    location: PropTypes.string,
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number
    
};