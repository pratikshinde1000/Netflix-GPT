import React from 'react'
import MovieCard from './MovieCard'


const MovieList = ({ title, movies }) => {
    return (
        <div className='flex flex-col px-4 py-2 gap-4 rounded-lg w-full h-full'>
            <h1 className='text-2xl font-semibold text-white '>
                {title}
            </h1>
            <div className='flex flex-col lg:flex-row p-1 gap-5 cursor-pointer overflow-scroll'>
                {movies.map((movie) =>
                    <MovieCard key={movie.id} posterPath={movie.poster_path} />
                )}
            </div>
        </div>
    )
}

export default MovieList
