import React from 'react';
import { Link } from 'react-router-dom';

// components
import ProjectIcons from './ProjectIcons';
// styled
import { ProjectCard, ProjectImg, DescriptionStyledP } from './styled/ProjectStyles';

const SingleProject = ({ projectImage, projectName, description, siteLink, repoLink }) => {
  return(
    <ProjectCard>
      <ProjectImg src={projectImage} alt={projectName}/>
      <div> 
      <h2>{projectName}</h2>
      <ProjectIcons />  
      <DescriptionStyledP>{description}</DescriptionStyledP>
      <Link to={siteLink} >Live Site</Link> / <Link to={repoLink} >Github repo</Link> 
      </div>
    </ProjectCard>
  )
}

export default SingleProject;