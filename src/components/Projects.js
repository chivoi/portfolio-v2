import React from 'react';
// components
import SingleProject from './SingleProject';

// utils
import { projectLinks } from '../utils/projectLinks';

const Projects = () => {
  return(
    <>
     <h1>Here's what I've been up to:</h1>
     <SingleProject projectName={"Vibe"} projectImage={projectLinks.vibe.img} description={"A Spotify extension that can make you a playlist based on your mood, energy levels and favourite music.Built in collaboration with other developers. My contribution includes the create playlist functionality, creation of some pages and responsive mobile-friendly design throughout."} siteLink={projectLinks.vibe.site} repoLink={projectLinks.vibe.repo}   />
    </> 
  )
}

export default Projects;