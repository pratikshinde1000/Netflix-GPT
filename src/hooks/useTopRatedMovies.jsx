import { useEffect } from 'react';
import { getRequest } from '../services/axios';
import { MOVIES_API_URL } from '../constants/apiUrls';
import { useDispatch } from 'react-redux';
import { addTopRated } from '../utils/moviesSlice';

const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const fetchTopRated = async () => {
        try {
            const response = await getRequest(MOVIES_API_URL.TOP_RATED);
            dispatch(addTopRated(response.results));
        } catch (error) {
            console.log('Error', error);
        }
    }

    useEffect(() => {
        fetchTopRated();
    }, [])

}

export default useTopRatedMovies;