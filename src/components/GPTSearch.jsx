import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTMovieSuggestions from './GPTMovieSuggestions'
import { BACKGROUND_IMAGE_URL } from '../constants/images'

const GPTSearch = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-screen'>   
      <img src={BACKGROUND_IMAGE_URL} className='absolute h-screen w-full -z-10' alt="Netflix background" />
      <GPTSearchBar />
      <GPTMovieSuggestions />
    </div>
  )
}

export default GPTSearch
