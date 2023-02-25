import styled from 'styled-components';


const HeroDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80%;
  align-items: center;
  justify-content: center;
  font-family: 'Quicksand', sans-serif;
  letter-spacing: 0.1em;
`;

const HeroImg = styled.img`
  overflow: hidden;
  border-radius: 50%;
  margin-bottom: 2rem;
  filter: drop-shadow(1px 1px 5px rgb(167,82,108) );

  @media screen and (max-width: 800px) {
    width: 250px;
    height: 250px;
  }
  
  @media screen and (max-width: 600px) {
    width: 200px;
    height: 200px;
  }
`

export {HeroDiv, HeroImg};