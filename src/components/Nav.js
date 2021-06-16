import React from 'react';
import { NavLink } from 'react-router-dom';
// styled components
import {StyledNav, NavUl} from './styled/NavStyles';
// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(fab, fas)


const Nav = () => {
  return(
    <StyledNav>
      <NavUl style={ {width: "15%"} }>
        <li><a href="https://www.linkedin.com/in/ana-lastoviria/"><FontAwesomeIcon icon={['fab', 'linkedin-in']} /></a></li>
        <li><a href="https://twitter.com/ana_lastoviria"><FontAwesomeIcon icon={['fab', 'twitter']} /></a></li>
        <li><a href="https://github.com/chivoi"><FontAwesomeIcon icon={['fab', 'github']} /></a></li>
        <li><a href="mailto:ana.lastoviria@gmail.com"><FontAwesomeIcon icon={['fas', 'envelope']} /></a></li>
      </NavUl>
      <NavUl style={ {width: "65%"} }>
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink exact to="/about">About</NavLink></li>
        <li><NavLink exact to="/projects">Projects</NavLink></li>
        <li><NavLink exact to="/resume">Resume</NavLink></li>
        <li><NavLink exact to="/contact">Contact</NavLink></li>
      </NavUl>
    </StyledNav>
  ); 
}

export default Nav;