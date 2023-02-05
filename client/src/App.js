import './App.css';
import React from 'react';
import { BrowserRouter as Router,Redirect,Route,Switch } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import Chat from './pages/Chat';


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

        <Redirect to="/" />
        
      </Switch>
    </Router>
  );
}

export default App;
