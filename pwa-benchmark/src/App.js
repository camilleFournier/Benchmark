import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './Components/Home/Home';
import Scrolling from './Components/Scrolling/Scrolling';
import Clicking from './Components/Clicking/Clicking';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'><Home/></Route>
        <Route path='/scrolling'><Scrolling /></Route>
        <Route path='/clicking'><Clicking /></Route>
      </Switch>
    </Router>
  );
}

export default App;
