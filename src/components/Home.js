import React from 'react';
// assets
import img from '../assets/ana.jpg';
// styled components
import { HeroDiv, HeroImg } from './styled/HomeStyles';

const Home = () => {
  return(
    <HeroDiv>
      <h1 style={{marginBottom:0}}>Hi friends 👋</h1>
      <h1>I'm Ana Lastoviria</h1>
      <HeroImg src={img} alt="Ana" />
      <h3>A Software Engineer based in Melbourne, Australia</h3>
    </HeroDiv>
  )
}

export default Home;