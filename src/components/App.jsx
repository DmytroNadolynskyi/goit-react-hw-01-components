import { GlobalStyles } from 'utils/GlobalStyles';

import Profile from './Profile/Profile';
import FriendList from './FriendList/FriendList';
// import FriendListItem from './FriendListItem/FriendListItem'
import TransactionHistory from './TransactionHistory/TransactionHistory';
import Statistics from './Statistics/Statistics';
import user from '../data/user.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import data from '../data/data.json';

export default function App() {
  return (
    <>
      <Profile
        userName={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      {/* <FriendListItem friends={friends[0]} />; */}
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
      <GlobalStyles />
    </>
  );
}
