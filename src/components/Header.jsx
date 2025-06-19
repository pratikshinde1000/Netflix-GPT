import React, { useState } from 'react'
import { AVATAR_IMAGE_URL, LOGO_IMAGE_URL } from '../constants'
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
const Header = () => {

  const [isDropdownVisible, setIsProfileDropdownVisible] = useState(false);
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      toast.success('User signed out successfully!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate('/');
    }).catch((error) => {
      const errorMessage = error.message;
      // console.error('Error signing up:', error.code, errorMessage);
      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    })
  }


  return (
    <>
      {user ? (
        <div className='flex justify-between fixed top-0 left-0 right-0 px-5 w-full h-16 bg-black z-10' >
          <div className='flex flex-row justify-start items-start w-3/4 h-full'>
            <img src={LOGO_IMAGE_URL} alt="Netflix Logo" className='w-44 flex align-bottom' />
            <ul className='flex flex-row gap-4 text-white text-sm font-normal my-auto ml-4'>
              <span className='cursor-pointer hover:text-zinc-400 hover:scale-110'>Home</span>
              <span className='cursor-pointer hover:text-zinc-400 hover:scale-110'>TV Shows</span>
              <span className='cursor-pointer hover:text-zinc-400 hover:scale-110'>Movies</span>
              <span className='cursor-pointer hover:text-zinc-400 hover:scale-110'>Games</span>
              <span className='cursor-pointer hover:text-zinc-400 hover:scale-110'>New & Popular</span>
              <span className='cursor-pointer hover:text-zinc-400 hover:scale-110'>My List</span>
              <span className='cursor-pointer hover:text-zinc-400 hover:scale-110'>Browse by Language</span>
            </ul>
          </div>
          <div className='flex flex-row justify-end items-center w-1/4 h-full'>
            <div className='flex flex-row justify-center items-center gap-5 text-white text-sm mx-4'>
              <span className='cursor-pointer hover:text-zinc-400 hover:scale-110'>Children</span>
              <img src="/notification.png" alt="bell-icon" className='w-5 h-5 cursor-pointer hover:scale-110' />
              <div className='flex flex-row justify-center items-center gap-2'>
                <div onMouseEnter={() => setIsProfileDropdownVisible(true)} className='flex flex-row justify-center items-center gap-1'>
                  <img src={AVATAR_IMAGE_URL} alt="avatar-image" className='w-8 h-8 rounded-lg cursor-pointer' />
                  <button className='text-sm text-center' >▼</button>
                </div>
                <div onMouseLeave={() => setIsProfileDropdownVisible(false)} onMouseEnter={() => setIsProfileDropdownVisible(true)} className={`absolute right-1 top-17 text-center bg-black text-white w-auto rounded-lg shadow-lg px-2 py-2 ${isDropdownVisible ? 'block' : 'hidden'}`}>
                  <button className='text-sm mx-auto text-end rotate-180'>▼</button>
                  <ul className='flex text-center flex-col gap-2 text-sm'>
                    <li className='cursor-pointer hover:text-zinc-400 hover:scale-110 mx-12'>Account</li>
                    <li className='cursor-pointer hover:text-zinc-400 hover:scale-110 mx-12'>Settings</li>
                    <li className='cursor-pointer hover:text-zinc-400 hover:scale-110 mx-12'>Help Center</li>
                    <hr className='border-t border-zinc-300 my-2' />
                    <li onClick={handleSignOut} className='cursor-pointer hover:text-zinc-400 hover:scale-110 mx-12'>Sign Out</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div >
      ) : (<div className='fixed top-0 left-0 right-0 px-5 w-full h-16 justify-center items-start z-10'>
        <img src={LOGO_IMAGE_URL} alt="Netflix Logo" className='w-44 flex align-bottom' />
      </div>)
      }

    </>);
}

export default Header
