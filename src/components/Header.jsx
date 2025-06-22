import React, { useState, useEffect } from 'react';
import { AVATAR_IMAGE_URL, LOGO_IMAGE_URL } from '../constants/images';
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { onAuthStateChanged } from "firebase/auth";
import { toggleGPTSearch } from '../utils/gptSlice';

const Header = () => {
  const dispatch = useDispatch();
  const [isProfileDropdownVisible, setIsProfileDropdownVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);

  const handleGPTSearchClick = () => {
    dispatch(toggleGPTSearch());
    setIsMobileMenuOpen(false); // Close mobile menu on navigation
  };

  const handleSignOut = () => {
    signOut(auth).then(() => {
      toast.success('User signed out successfully!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate('/');
    }).catch((error) => {
      toast.error(error.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate('/browse');
      } else {
        dispatch(removeUser());
        navigate('/');
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [dispatch, navigate]);

  return (
    <>
      <header className='flex justify-between items-center fixed top-0 left-0 right-0 px-4 sm:px-8 py-2 bg-gradient-to-b from-black z-50'>
        <div className="flex items-center">
          <img src={LOGO_IMAGE_URL} alt="Netflix Logo" className='w-28 md:w-44' />
        </div>

        {user && (
          <>
            {/* Desktop Navigation */}
            <nav className='hidden md:flex items-center'>
              <ul className='flex flex-row gap-4 text-white text-sm font-normal items-center'>
                <li className='cursor-pointer hover:text-zinc-400 hover:scale-110'>Home</li>
                <li className='cursor-pointer hover:text-zinc-400 hover:scale-110'>TV Shows</li>
                <li className='cursor-pointer hover:text-zinc-400 hover:scale-110'>Movies</li>
                <li className='cursor-pointer hover:text-zinc-400 hover:scale-110'>New & Popular</li>
                <li className='cursor-pointer hover:text-zinc-400 hover:scale-110'>My List</li>
                <li className='cursor-pointer hover:text-zinc-400 hover:scale-110'>Browse by Language</li>
              </ul>
            </nav>
            <div className='hidden md:flex items-center gap-5 text-white text-sm'>
              <button onClick={handleGPTSearchClick} className='hover:scale-110 hover:text-zinc-400 cursor-pointer'>{showGPTSearch ? 'Home' : 'GPT Search'}</button>
              <img src="/notification.png" alt="bell-icon" className='w-5 h-5 cursor-pointer hover:scale-110' />
              <div className='relative' onMouseLeave={() => setIsProfileDropdownVisible(false)}>
                <div onMouseEnter={() => setIsProfileDropdownVisible(true)} className='flex items-center gap-1 cursor-pointer'>
                  <img src={AVATAR_IMAGE_URL} alt="avatar" className='w-8 h-8 rounded-md' />
                  <span className='text-sm'>▼</span>
                </div>
                
                {isProfileDropdownVisible && (
                  <div className='absolute right-0 top-10 -mt-2 bg-black text-white w-48 rounded-md shadow-lg py-2'>
                    <ul className='flex flex-col gap-2 text-sm'>
                      <li className='px-4 py-2 hover:bg-zinc-800 cursor-pointer'>Account</li>
                      <li className='px-4 py-2 hover:bg-zinc-800 cursor-pointer'>Settings</li>
                      <li className='px-4 py-2 hover:bg-zinc-800 cursor-pointer'>Help Center</li>
                      <hr className='border-t border-zinc-700 my-1' />
                      <li onClick={handleSignOut} className='px-4 py-2 hover:bg-zinc-800 cursor-pointer'>Sign Out</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className='md:hidden flex items-center'>
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              </button>
            </div>
          </>
        )}
      </header>

      {/* Mobile Menu */}
      {user && isMobileMenuOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 bg-black bg-opacity-90 z-40 p-4">
          <ul className='flex flex-col gap-4 text-white text-center'>
            <li className='cursor-pointer py-2 hover:text-zinc-400' onClick={() => { navigate('/browse'); setIsMobileMenuOpen(false); }}>Home</li>
            <li className='cursor-pointer py-2 hover:text-zinc-400' onClick={() => setIsMobileMenuOpen(false)}>TV Shows</li>
            <li className='cursor-pointer py-2 hover:text-zinc-400' onClick={() => setIsMobileMenuOpen(false)}>Movies</li>
            <li className='cursor-pointer py-2 hover:text-zinc-400' onClick={() => setIsMobileMenuOpen(false)}>New & Popular</li>
            <li className='cursor-pointer py-2 hover:text-zinc-400' onClick={() => setIsMobileMenuOpen(false)}>My List</li>
            <li className='cursor-pointer py-2 hover:text-zinc-400' onClick={() => setIsMobileMenuOpen(false)}>Browse by Language</li>
            <li className='cursor-pointer py-2 hover:text-zinc-400' onClick={handleGPTSearchClick}>{showGPTSearch ? 'Home' : 'GPT Search'}</li>
            <hr className='border-t border-zinc-700 my-2' />
            <li className='cursor-pointer py-2 hover:text-zinc-400' onClick={() => setIsMobileMenuOpen(false)}>Account</li>
            <li className='cursor-pointer py-2 hover:text-zinc-400' onClick={() => setIsMobileMenuOpen(false)}>Help Center</li>
            <li className='cursor-pointer py-2 text-red-500 hover:text-red-400 font-bold' onClick={handleSignOut}>Sign Out</li>
          </ul>
        </div>
      )}

      {/* Logged out state background for the logo */}
      {!user && (
        <div className='fixed top-0 left-0 right-0 px-5 w-full h-16 justify-start items-center z-10 bg-gradient-to-b from-black'>
           {/* The logo is already handled by the main header section, this div is mainly for the background */}
        </div>
      )}
    </>
  );
};

export default Header;