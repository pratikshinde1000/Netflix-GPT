import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store)=> store.movies)
  return (
    <div className='bg-black'>
      <div className='flex flex-col h-full w-full lg:-mt-[15%] z-20 relative'>
          <MovieList title={"Now Playing"} movies={movies.nowPlaying}/>
          <MovieList title={"Popular"} movies={movies.popular} />
          <MovieList title={"Top Rated"} movies={movies.topRated} />
          <MovieList title={"Upcoming"} movies={movies.upcoming} />
      </div>
    </div>
  )
}

export default SecondaryContainer
