import React from 'react';
import { NavLink } from 'react-router-dom';
// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(fab, fas)


const Nav = () => {
  return(
    <nav>
      <ul>
        <li><a href="https://www.linkedin.com/in/ana-lastoviria/"><FontAwesomeIcon icon={['fab', 'linkedin-in']} /></a></li>
        <li><a href="https://twitter.com/ana_lastoviria"><FontAwesomeIcon icon={['fab', 'twitter']} /></a></li>
        <li><a href="https://github.com/chivoi"><FontAwesomeIcon icon={['fab', 'github']} /></a></li>
        <li><a href="mailto:ana.lastoviria@gmail.com"><FontAwesomeIcon icon={['fas', 'envelope']} /></a></li>
      </ul>
      <ul>
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink exact to="/about">About</NavLink></li>
        <li><NavLink exact to="/projects">Projects</NavLink></li>
        <li><NavLink exact to="/resume">Resume</NavLink></li>
        <li><NavLink exact to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
  ); 
}

export default Nav;