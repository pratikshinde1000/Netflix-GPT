import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';
import SecondaryContainer from './SecondaryContainer';
const MainContainer = () => {
  const movies = useSelector((state)=> state.movies?.nowPlaying);
  
  if(!movies || movies.length === 0) return null;

  const { original_title, overview, id  } = movies[0];

  return (
    <div>
        <VideoTitle title={original_title} overview={overview} />
        <VideoBackground movieId={id} />
        <SecondaryContainer />
    </div>
  )
}

export default MainContainer
