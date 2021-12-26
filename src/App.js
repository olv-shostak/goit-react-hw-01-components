// App.js
import user from './data/user.json';
import statistics from './data/statistics.json';
import Profile from './components/Profile/Profile';
import { Container } from './App.styled';
import 'normalize.css';
import Statistics from './components/Statistics/Statistics';

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
    </Container>
  );
}

export default App;
