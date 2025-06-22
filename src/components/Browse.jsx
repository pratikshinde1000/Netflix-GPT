import React from 'react';
import Header from './Header';
import GPTSearch from './GPTSearch';
import useNowPlaying from '../hooks/useNowPlaying';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import { useSelector } from 'react-redux';
const Browse = () => {

  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch)


  useNowPlaying();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();


  return (
    <div>
      <Header />
      {
        showGPTSearch ? (
          <GPTSearch />
        ) : (
          <>
            <MainContainer />
            <SecondaryContainer />
          </>
        )
      }
    </div>
  )
}

export default Browse
