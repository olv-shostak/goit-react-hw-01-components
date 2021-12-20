// App.js
import user from './data/user.json';
import Profile from './components/Profile/Profile';
import { Container } from './App.styled';

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
    </Container>
  );
}

export default App;
