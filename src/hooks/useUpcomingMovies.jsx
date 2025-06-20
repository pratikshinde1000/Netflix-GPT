import { useEffect } from 'react';
import { getRequest } from '../services/axios';
import { MOVIES_API_URL } from '../constants/apiUrls';
import { useDispatch } from 'react-redux';
import { addUpcoming } from '../utils/moviesSlice';

const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const fetchUpcoming = async () => {
        try {
            const response = await getRequest(MOVIES_API_URL.UPCOMING);
            dispatch(addUpcoming(response.results));
        } catch (error) {
            console.log('Error', error);
        }
    }

    useEffect(() => {
        fetchUpcoming();
    }, [])

}

export default useUpcomingMovies;