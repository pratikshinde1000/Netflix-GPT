import { useEffect } from 'react';
import { getRequest } from '../services/axios';
import { MOVIES_API_URL } from '../constants/apiUrls';
import { useDispatch } from 'react-redux';
import { addPopular } from '../utils/moviesSlice';

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const fetchPopularMovies = async () => {
    try {
      const response = await getRequest(MOVIES_API_URL.POPULAR);
      dispatch(addPopular(response.results));
    } catch (error) {
      console.log('Error', error);
    }
  }

  useEffect(()=> {
    fetchPopularMovies();
  }, [])

}

export default usePopularMovies;