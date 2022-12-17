
// import Profile from './Profile/Profile'
// import FriendList from './FriendList/FriendList'
// import TransactionHistory from './TransactionHistory/TransactionHistory'
import Statistics from './Statistics/Statistics'
// import user from '../data/user.json'
// import friends from '../data/friends.json'
// import transactions from '../data/transactions.json'
import data from '../data/data.json'
export default function App (){
  return (
    <div>
    {/* <Profile
    url={user.avatar}
    userName={user.username}
    tag={user.tag}
    location={user.location}
    followers={user.stats.followers}
    views={user.stats.views}
    likes={user.stats.likes } /> */}
      {data.map(dat => (
        <Statistics
          key={dat.id}
          label={dat.label}
          percentage={dat.percentage}
        />
      ))
        }
      {/* {friends.map(friend => (
        <FriendList
        key={friend.id}
        url={friend.avatar}
        userName={friend.name}
        status={friend.isOnline}
        />))}; */}
      {/* {transactions.map(transaction => (
        <TransactionHistory
          key={transaction.id}
          type={transaction.type}
          amount={transaction.amount}
          currency={transaction.currency}
          />
      ))}; */}
    </div>
  );
};





