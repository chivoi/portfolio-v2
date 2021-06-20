import React from 'react';
// assets
import img from '../assets/ana.jpeg';
// styled components
import { HeroDiv, HeroImg } from './styled/HomeStyles';

const Home = () => {
  return(
    <HeroDiv>
      <h1>Hi! I'm Ana Lastoviria</h1>
      <HeroImg src={img} alt="Ana" />
      <h3>A Software Developer based in Melbourne, Australia</h3>
    </HeroDiv>
  )
}

export default Home;