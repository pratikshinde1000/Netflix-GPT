import React from 'react'

const VideoTitle = ({ title, overview }) => {
  return (

    <div className='absolute justify-center text-white flex flex-col gap-3 w-screen aspect-video z-10 bg-gradient-to-r from-black'>
      <div className='flex mt flex-col gap-5 w-full ml-[5%]'>
        <h1 className='text-3xl font-bold' >{title}</h1>
        <p className='text-md font-normal w-1/3'>{overview}</p>
        <div className='flex text-xl text-start w-1/3 align-middle gap-2'>
          <button className='bg-white opacity-100 hover:opacity-80 cursor-pointer hover:scale-3d h-full my-auto text-center px-6 w-4/12 py-1 text-black font-semibold rounded-lg'>Play ▶️</button>
          <button className='bg-zinc-500 hover:opacity-80 cursor-pointer h-full my-auto px-6 w-4/12 py-1 text-white font-semibold rounded-lg'>More Info</button>
        </div>
      </div>

    </div>
  )
}

export default VideoTitle
