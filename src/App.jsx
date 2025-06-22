import React from 'react'
import Body from "./components/Body"
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <div className='flex flex-col h-screen w-screen text-white font-open-sans '>
      <ToastContainer />
      <Body />
    </div>
  )
}

export default App
