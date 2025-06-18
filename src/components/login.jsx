import React, { useRef, useState } from 'react'
import Header from './Header'
import { BACKGROUND_IMAGE_URL } from '../constants'
import { validateFormData } from '../utils/validator'

const login = () => {

  const [formType, setFormType] = useState('Sign In');

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);


  const handleFormTypeChange = () => {
    setFormType(formType === 'Sign In' ? 'Sign Up' : 'Sign In');
  }



  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      email: email.current.value,
      password: password.current.value,
      name: formType === 'Sign Up' ? name.current.value : ''
    };
    console.log(formData);
    const validation = validateFormData(formData);
    if (!validation.isValid) {
      alert(validation.message);
      return;
    }
  }

  return (
    <div>
      <Header />
      <div>
        <img src={BACKGROUND_IMAGE_URL} alt="background-image" />
        <form
          onSubmit={handleSubmit}
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
          className="absolute flex flex-col gap-5 px-[64px] py-[40px] rounded-sm left-0 right-0 mx-auto top-1/5 w-1/3 bg-opacity-90"
        >
          <h1 className='text-white text-[32px] font-bold my-2'>{formType}</h1>
          {
            formType === 'Sign Up' &&
            <input type="text" placeholder='Name' className='p-4 text-white font-medium border-white border-[1px] rounded-lg outline-none' name='name' ref={name} required />
          }
          <input type="text" placeholder='Email or mobile number' className='p-4 text-white font-medium border-white border-[1px] rounded-lg outline-none' name='email' ref={email} required />
          <input type="password" placeholder='Password' className='p-4 text-white border-white border-[0.5px] rounded-lg outline-none' name='password' ref={password} required />
          <button className='bg-red-700 text-white font-normal py-2 rounded-lg'>{formType}</button>
          {
            formType === 'Sign In' ?
              <p className='w-full text-start text-zinc-400'>New to Netflix?<span onClick={handleFormTypeChange} className='text-white cursor-pointer'>Sign up now.</span></p>
              : <p className='w-full text-start text-zinc-400'>Already registered to Netflix?<span onClick={handleFormTypeChange} className='text-white cursor-pointer'>Sign In.</span></p>
          }
        </form>
      </div>
    </div>
  )
}

export default login
