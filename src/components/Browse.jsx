import React from 'react';
import Header from './Header';
import useNowPlaying from '../hooks/useNowPlaying';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
// import
import MainContainer from './MainContainer';
 const Browse  = () => {

  useNowPlaying();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  

  return (
    <div>
      <Header/>
      <MainContainer />
    </div>
  )
}

export default Browse
