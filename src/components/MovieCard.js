'use client'

import styled from 'styled-components';
import { NEXT_PUBLIC_TMDB_IMG_URL } from "utils/config";

const Card = styled.div`
  width: 236px;
  height: 351px;
  border-radius: 5px;
  margin: 10px;
  position: relative;
  overflow: hidden;
`;

const Poster = styled.img `
  width: 100%;
  height: 100%;
  border-radius: 5px;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.1); 
  }
`;

const TitleOverlay = styled.div`
  position: absolute;
  text-align: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 18px;
  font-weight: bold;
  opacity: 0;
  transition: opacity 0.3s ease;
  visibility: hidden;
  
  ${Card}:hover & {
    opacity: 1;
    visibility: visible;
    cursor: pointer;
  }
`;

const MovieCard = ({title, poster}) => {

  return (
    <Card>
      <Poster src={ NEXT_PUBLIC_TMDB_IMG_URL + poster} />
      <TitleOverlay>{title}</TitleOverlay>
    </Card>
  );
};

export default MovieCard;

