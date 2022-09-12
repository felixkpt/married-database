import './App.css'
import Auth from './pages/Auth/Auth';
import Home from './pages/home/Home';
import Profile from './pages/Profile/Profile';

function App() {

  return (
    <div className="App">
      <div className="blur" style={{ top: '1rem', right: 0 }}></div>
      <div className="blur" style={{ top: '60%', left: '2rem' }}></div>
      {/* <Home /> */}
      <Profile />
      {/* <Auth /> */}
    </div>
  );
}

export default App;
