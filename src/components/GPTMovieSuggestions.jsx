import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from './MovieCard'

const GPTMovieSuggestions = () => {

  const { searchText, movieResults } = useSelector(store => store.gpt);

  if (!searchText) return;

  return (
    <div className='flex flex-col  bg-black px-4 py-2 gap-5 rounded-lg w-full h-screen overflow-auto'>
      <h1 className='text-2xl font-semibold text-white '>
        Showing search results for {searchText}
      </h1>
      <div className='flex flex-wrap w-full justify-center bg-black lg:flex-row px-auto gap-5 cursor-pointer overflow-scroll'>
        {movieResults.map((movie) =>
          <MovieCard key={movie.id} posterPath={movie.poster_path} />
        )}
      </div>
    </div>
  )
}

export default GPTMovieSuggestions
