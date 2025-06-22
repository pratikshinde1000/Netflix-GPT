import React, { useRef } from 'react';
import genAIModel from '../utils/gemini';
import { MOVIES_API_URL } from "../constants/apiUrls";
import { getRequest } from '../services/axios';
import { addGPTMovieResult } from '../utils/gptSlice';
import { useDispatch } from 'react-redux';

const GPTSearchBar = () => {
  const dispatch = useDispatch();
  const searchInputRef = useRef();

  const searchTMDBMovies = async (movies_name) => {
    try {
      const response = await getRequest(`${MOVIES_API_URL.SEARCH}?query=${movies_name}&include_adult=false&language=en-US&page=1`);
      return response.results;
    } catch (error) {
      console.log('error', error);
    }
  }

  const handleSearchClick = async () => {
    const searchText = searchInputRef.current.value;
    const prompt = `Act as a movie search system and suggest max 5 matched movies for the query: ${searchText}. Provide the movie names as a comma-separated list.
    Make results heigher priority matching with name
    Or match with generic terms
    If not found anything then give matches response`;
    const result = await genAIModel.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    const moviesArray = text.split(",").map((movie) => movie.trim());
    const promiseArray = moviesArray.map((movie) => searchTMDBMovies(movie))
    const tmdbResults = (await Promise.all(promiseArray)).flat();
    dispatch(addGPTMovieResult({ movieResults: tmdbResults, searchText: searchText }))
  }

  return (
    <div className='flex flex-row mt-[10%] h-auto gap-3 bg-black px-5 py-5 justify-center w-1/2 rounded-l-lg '>
      <input ref={searchInputRef} type="text" placeholder='Search...' className='px-2 outline-2 transition-shadow text-black bg-amber-50 placeholder:text-black min-w-[80%]  rounded-lg' />
      <button onClick={handleSearchClick} className='py-3 w-full  hover:bg-red-400 bg-red-600 text-white rounded-lg cursor-pointer font-semibold' >Search</button>
    </div>
  )
}

export default GPTSearchBar
