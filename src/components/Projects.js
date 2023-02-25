import React from 'react';
// components
import SingleProject from './SingleProject';

// utils
import { projectLinks } from '../utils/projectLinks';

const Projects = () => {
  return(
    <>
     <h1>Here's what I've been up to:</h1>
     <SingleProject projectName={"Roster Rosie"} projectImage={projectLinks.rosterRosie.img} description={"A small Node/TypeScript app that, in conjunction with a Slack Workflow, posts to my team's Slack channel who runs scrum ceremonies whenever they happen."} repoLink={projectLinks.rosterRosie.repo}   />
     <SingleProject projectName={"Toy Robot"} projectImage={projectLinks.toyRobot.img} description={"A Toy Robot challenge solution that started as a Node/TS library and then grew a React front end. Beyond the classic commands, this robot has a 3D expansion and can fly. Built for Zendesk code club."} repoLink={projectLinks.toyRobot.repo} siteLink={projectLinks.toyRobot.site}  />

     <SingleProject projectName={"Vibe"} projectImage={projectLinks.vibe.img} description={"A Spotify extension that can make you a playlist based on your mood, energy levels and favourite music. Built in collaboration with other developers. My contribution includes the create playlist functionality, creation of some pages and responsive mobile-friendly design throughout."} siteLink={projectLinks.vibe.site} repoLink={projectLinks.vibe.repo}   />
    </> 
  )
}

export default Projects;