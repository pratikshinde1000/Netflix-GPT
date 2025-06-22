import React from 'react';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute justify-center aspect-video mt-[10%] lg:mt-[5%] inset-0 flex flex-col  text-white bg-gradient-to-t from-black  z-10">
      <div className="pl-[5%] pb-12">
        <h1 className="text-xl lg:text-4xl font-extrabold drop-shadow-lg">{title}</h1>
        <p className="hidden lg:block lg:text-lg font-light mt-4 max-w-lg drop-shadow-md">{overview}</p>
        <div className="flex gap-1 lg:gap-4 mt-6">
          <button className="flex items-center justify-center bg-white text-black font-semibold text-lg px-8 py-3 rounded hover:bg-opacity-90 transition">
            ▶️ Play
          </button>
          <button className="flex items-center justify-center bg-gray-700 text-white font-semibold text-lg px-8 py-3 rounded hover:bg-gray-600 transition">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
