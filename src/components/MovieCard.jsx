import React from 'react'
import { IMAGE_CDN_URL } from '../constants/apiUrls'
const MovieCard = ({ posterPath }) => {
  return (
    <div className='min-w-44 min-h-60 bg-gray-800 rounded-lg overflow-hidden hover:scale-110  transition-transform duration-300'>
      <img src={`${IMAGE_CDN_URL}${posterPath}`} alt="movie-poster" className='w-full h-full' />
    </div>
  )
}

export default MovieCard
