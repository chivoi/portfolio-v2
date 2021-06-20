import React from 'react';
import { NavLink } from 'react-router-dom';
// styled components
import {StyledNav, NavUl, StyledNavLink} from './styled/NavStyles';
// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(fab, fas)

const linkStyles = {
  color: "black"
}

const activeLinkStyles = {
  color: "rgb(168,21,113)",
  textDecoration: "overline"
};

const Nav = () => {
  return(
    <StyledNav>
      <NavUl style={ {width: "15%"} }>
        <li><StyledNavLink href="https://www.linkedin.com/in/ana-lastoviria/"><FontAwesomeIcon icon={['fab', 'linkedin-in']} /></StyledNavLink></li>
        <li><StyledNavLink href="https://twitter.com/ana_lastoviria"><FontAwesomeIcon icon={['fab', 'twitter']} /></StyledNavLink></li>
        <li><StyledNavLink href="https://github.com/chivoi"><FontAwesomeIcon icon={['fab', 'github']} /></StyledNavLink></li>
        <li><StyledNavLink href="mailto:ana.lastoviria@gmail.com"><FontAwesomeIcon icon={['fas', 'envelope']} /></StyledNavLink></li>
      </NavUl>
      <NavUl style={ {width: "65%"} }>
        <li><NavLink style={linkStyles} activeStyle={activeLinkStyles} exact to="/">Home</NavLink></li>
        <li><NavLink style={linkStyles} activeStyle={activeLinkStyles} exact to="/about">About</NavLink></li>
        <li><NavLink style={linkStyles} activeStyle={activeLinkStyles} exact to="/projects">Projects</NavLink></li>
        <li><NavLink style={linkStyles} activeStyle={activeLinkStyles} exact to="/resume">Resume</NavLink></li>
        <li><NavLink style={linkStyles} activeStyle={activeLinkStyles} exact to="/contact">Contact</NavLink></li>
      </NavUl>
    </StyledNav>
  ); 
}

export default Nav;