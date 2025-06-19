import React, { useRef, useState } from 'react'
import Header from './Header'
import { BACKGROUND_IMAGE_URL } from '../constants/images'
import { validateFormData } from '../utils/validator'
import { toast } from 'react-toastify'
import { auth } from '../utils/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice';
const login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formType, setFormType] = useState('Sign In');
  const [isLoading, setIsLoading] = useState(false);
  const email = useRef(null);
  const password = useRef(null);  
  const name = useRef(null);

  const handleFormTypeChange = () => {
    setFormType(formType === 'Sign In' ? 'Sign Up' : 'Sign In');
  };

  const handleSignUp = async (formData) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      const user = userCredential.user;
      console.log('User signed up:', user);
      toast.success('User signed up successfully!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      updateProfile(auth.currentUser, {
        displayName: formData.name
      }).then(() => {
        const { uid, email, displayName } = auth.currentUser;
        console.log('Profile updated:', { uid, email, displayName });
        dispatch(addUser({ uid, email, displayName }));
      }).catch((error) => {
        throw error;
      });
    } catch (error) {
      const errorMessage = error.message;
      console.error('Error signing up:', error.code, errorMessage);
      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignIn = async (formData) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password);
      const user = userCredential.user;
      console.log('User signed in:', user);
      toast.success('User signed in successfully!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      const errorMessage = error.message;
      console.error('Error signing in:', error.code, errorMessage);
      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const formData = {
        email: email.current.value,
        password: password.current.value,
        name: formType === 'Sign Up' ? name.current.value : ''
      };
      console.log(formData);

      const validation = validateFormData(formData);
      if (!validation.isValid) {
        throw new Error(validation.errorMessage);
      }

      if (formType === 'Sign Up') {
        handleSignUp(formData);
      } else {
        handleSignIn(formData);
      }
    } catch (error) {
      toast.error(error?.message || 'Internal Server Error', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Header />
      <div>
        <img src={BACKGROUND_IMAGE_URL} className='h-screen w-full' alt="Netflix background" />
        <form
          onSubmit={handleSubmit}
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
          className="absolute flex flex-col gap-5 px-[64px] py-[40px] rounded-sm left-0 right-0 mx-auto top-1/5 w-[90%] lg:w-1/3 bg-opacity-90"
        >
          <h1 className='text-white text-[32px] font-bold my-2'>{formType}</h1>
          {
            formType === 'Sign Up' &&
            <input type="text" placeholder='Name' className='p-4 text-white font-medium border-white border-[1px] rounded-lg outline-none' name='name' ref={name} required />
          }
          <input type="text" placeholder='Email or mobile number' className='p-4 text-white font-medium border-white border-[1px] rounded-lg outline-none' name='email' ref={email} required />
          <input type="password" placeholder='Password' className='p-4 text-white border-white border-[0.5px] rounded-lg outline-none' name='password' ref={password} required />
          <button disabled={isLoading} className={`${isLoading ? 'bg-red-500' : ' bg-red-700'} text-white font-normal py-2 rounded-lg`}>{formType}</button>
          {
            formType === 'Sign In' ?
              <p className='w-full text-start text-zinc-400'>New to Netflix?<span onClick={handleFormTypeChange} className='text-white cursor-pointer'> Sign up now.</span></p>
              : <p className='w-full text-start text-zinc-400'>Already registered to Netflix?<span onClick={handleFormTypeChange} className='text-white cursor-pointer'> Sign In.</span></p>
          }
        </form>
      </div>
    </div>
  );
};

export default login;
