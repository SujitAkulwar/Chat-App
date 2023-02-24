import './App.css';
import React from 'react';
import { BrowserRouter as Router,Redirect,Route,Switch } from 'react-router-dom';
import Login from './pages/auth/Login';
import Home from './pages/Home/Home';
import Register from './pages/auth/Register';
import Chat from './pages/Chat/Chat';
import Profile from './pages/Profile/Profile';


function App() {
  return (
    <Router>
      <Switch>
        
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/Register" exact>
          <Register/>
        </Route>

        <Route path="/Chat" exact>
          <Chat/>
        </Route>

        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/Profile" exact>
          <Profile />
        </Route>

        <Redirect to="/" />
        
      </Switch>
    </Router>
  );
}

export default App;
