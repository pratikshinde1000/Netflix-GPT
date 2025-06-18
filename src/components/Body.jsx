import React, { useEffect } from 'react';
import Login from './login';
import Browse from './Browse';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const Body = () => {
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Login />
    },
    {
      path: '/browse',
      element: <Browse />
    }
  ])
  

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User is signed in!");
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate('/browse');
      } else {
        console.log("User is signed out!");
        dispatch(removeUser());
        navigate('/');
      }
    });
  }, [])

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body
