// App.js
import user from './data/user.json';
import statistics from './data/statistics.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';
import Profile from './components/Profile/Profile';
import { Container } from './App.styled';
import 'normalize.css';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/Transactions/Transactions';

function App() {
  return (
    <Container>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stastFolowers={user.stats.followers}
        statsViews={user.stats.views}
        statsLikes={user.stats.likes}
      />
      <Statistics title="Upload stats" data={statistics} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
}

export default App;
