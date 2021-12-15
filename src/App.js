// App.js
import './App.css';
import user from './data/user.json';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className="App">
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stastFolowers={user.stats.followers}
        statsViews={user.stats.views}
        statsLikes={user.stats.likes}
      />
    </div>
  );
}

export default App;
