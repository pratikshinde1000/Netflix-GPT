import React from 'react'
import Body from "./components/Body"
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <div className='flex flex-col h-screen w-screen bg-gray-900 text-white font-open-sans '>
      <ToastContainer />
      <Body />
    </div>
  )
}

export default App
