import './App.css'
import Auth from './pages/Auth/Auth';
import Home from './pages/home/Home';
import Profile from './pages/Profile/Profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './pages/NotFound/NotFound';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <div className="blur" style={{ top: '1rem', right: 0 }}></div>
        <div className="blur" style={{ top: '60%', left: '2rem' }}></div>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/sign-up" element={<Auth page="sign-up" />} />
            <Route path="/sign-in" element={<Auth page="sign-in" />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
