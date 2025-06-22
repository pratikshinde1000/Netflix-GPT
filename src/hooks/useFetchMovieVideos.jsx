import { useEffect, useState } from "react";
import { getRequest } from "../services/axios";
import { MOVIES_API_URL } from "../constants/apiUrls";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useSelector } from "react-redux";
const useFetchMovieVideos = (movieId) => {

    const trailerVideo = useSelector(store => store.movies?.trailerVideo)
    const dispatch = useDispatch();

    const fetchMovieVideo = async () => {
        try {
            const response = await getRequest(MOVIES_API_URL.VIDEOS.replace('{movie_id}', movieId));
            const filteredVideos = response.results.filter(video => video.site === 'YouTube' && video.type === 'Trailer');
            const videoKey = filteredVideos.length > 0 ? filteredVideos[0].key : response.results[0].key;
            dispatch(addTrailerVideo(`${MOVIES_API_URL.YOUTUBE_BASE_URL}/${videoKey}?&autoplay=1&mute=1&loop=1&controls=0`));
        } catch (error) {
            console.log('Error', error);
        }
    }

    useEffect(() => {
       if(!trailerVideo) fetchMovieVideo();
    }, [movieId])


}
export default useFetchMovieVideos;