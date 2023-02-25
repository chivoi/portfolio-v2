import styled from 'styled-components';

export const ProjectCard = styled.div`
  display: flex;
  flex-direction: row;
  width: 55%;
  align-items: center;
  justify-content: center;
  border-right: 1px dotted black;
  border-bottom: 1px dotted black;
  border-radius: 15px;
  margin-bottom: 1em;
`;

export const ProjectImg = styled.img`
  height: 300px;
  border-radius: 1.5rem;
  margin: 3rem;
`;

export const DescriptionStyledP = styled.p`
  padding-right: 15px;
  border: 3px solid red;
`;