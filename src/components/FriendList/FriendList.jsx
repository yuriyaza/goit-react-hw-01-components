import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import PropTypes, { arrayOf, object } from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(({ id, avatar, name, isOnline }) => {
        return <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />;
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(object).isRequired,
};
