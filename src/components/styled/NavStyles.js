import styled from 'styled-components';

const StyledNav = styled.nav`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  font-family: 'Quicksand', sans-serif;
  font-weight: 400;
  font-size: 2.5rem;
  letter-spacing: 0.08em;
  margin: 2rem 0;
`;

const NavUl = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 0 3rem;
  padding: 0;
`;

const StyledNavLink = styled.li`
  color: black;
  &:hover{
    transition: 0.3s;
    transform: translateY(-3.5px);
    filter: drop-shadow(2px 2px #d3d3d3);
  }
`;

export {StyledNav, NavUl, StyledNavLink};