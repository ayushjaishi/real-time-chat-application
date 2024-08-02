import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ChatRoom from './components/Chat/ChatRoom';
import NewsList from './components/News/NewsList';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Real-Time Chat and News Application</h1>
          <nav>
            <ul>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
              <li><Link to="/chat-room">Chat Room</Link></li>
              <li><Link to="/news">News</Link></li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/chat-room" element={<ChatRoom />} />
          <Route path="/news" element={<NewsList />} />
          <Route path="/" element={<h2>Welcome to the Application</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
