import styled from 'styled-components';

const StyledNav = styled.nav`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  font-family: 'Quicksand', sans-serif;
  font-weight: 400;
  font-size: 2.5rem;
  letter-spacing: 0.05em;
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

export {StyledNav, NavUl};