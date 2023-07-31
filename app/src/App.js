import './App.css';
import React from 'react';
import { BrowserRouter as Router,Route,Routes, Navigate } from 'react-router-dom';
import Login from './pages/auth/Login';
import Home from './pages/Home/Home';
import Register from './pages/auth/Register';
import Chat from './pages/Chat/Chat';
import Profile from './pages/Profile/Profile';


function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" exact element={<Home />} />
        <Route path="/Register" exact element={<Register />} />
        <Route path="/Chat" exact element={<Chat/>} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/Profile" exact element={<Profile />} />
        <Route path="*" exact element={<Navigate to="/" replace />}/>
          
      </Routes>
    </Router>
  );
}

export default App;
