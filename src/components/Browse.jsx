import React from 'react';
import Header from './Header';
import useNowPlaying from '../hooks/useNowPlaying';
import MainContainer from './MainContainer';
 const Browse  = () => {

  useNowPlaying();

  return (
    <div>
      <Header/>
      <MainContainer />
    </div>
  )
}

export default Browse
