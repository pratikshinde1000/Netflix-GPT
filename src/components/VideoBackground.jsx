  import React from 'react';
  import useFetchMovieVideos from '../hooks/useFetchMovieVideos';
  import { useSelector } from 'react-redux';
  const VideoBackground = ({ movieId }) => {
    const trailerVideo = useSelector(store => store.movies.trailerVideo)
    useFetchMovieVideos(movieId);

    return (
      <div>
        <iframe
          className='w-screen aspect-video'
          src={trailerVideo}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen></iframe>
      </div>
    )
  }

  export default VideoBackground
