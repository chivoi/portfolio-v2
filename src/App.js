import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//components
import Nav from './components/Nav';
import Home from './components/Home';

import './App.scss';

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" render={props => <Home /> } />
        </Switch>
      </Router>    
    </>
  );
}

export default App;
