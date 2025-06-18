import React from 'react'
import { LOGO_IMAGE_URL } from '../constants'
const Header = () => {
  return (
    <div className=''>
      <img src={LOGO_IMAGE_URL} alt="Netflix Logo" className='w-50 absolute top-0 left-0' />
    </div>
  )
}

export default Header
