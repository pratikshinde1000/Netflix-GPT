import { useEffect } from 'react';
import { getRequest } from '../services/axios';
import { MOVIES_API_URL } from '../constants/apiUrls';
import { useDispatch } from 'react-redux';
import { addNowPlaying } from '../utils/moviesSlice';

const useNowPlaying = () => {
  const dispatch = useDispatch();
  const fetchNowPlayingMovies = async () => {
    try {
      const response = await getRequest(MOVIES_API_URL.NOW_PLAYING);
      dispatch(addNowPlaying(response.results));
    } catch (error) {
      console.log('Error', error);
    }
  }

  useEffect(()=> {
    fetchNowPlayingMovies();
  }, [])

}

export default useNowPlaying;