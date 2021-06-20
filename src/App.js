import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// styles
import './App.scss';
//components
import Nav from './components/Nav';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" render={props => <Home /> } />
          <Route exact path="/about" render={props => <About /> } />
          <Route exact path="/projects" render={props => <Projects /> } />
          <Route exact path="/resume" render={props => <Resume /> } />
          <Route exact path="/contact" render={props => <Contact /> } />
        </Switch>
      </Router>    
    </>
  );
}

export default App;
