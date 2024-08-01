import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserInput from './components/UserInput.jsx';
import Display from './components/Display.jsx';
import DataContextProvider from './contexts/DataContext';
import Home from './components/Home.jsx';
import Layout from './components/Layout.jsx';
import Detail from './components/Detail.jsx';





const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/add',
        element: <UserInput />
      },
      {
        path: '/data',
        element: <Display />
      },
      {
        path: '/analyse',
        element: <Detail />
      }
    ]
  }
  
])


ReactDOM.createRoot(document.getElementById('root')).render(

  <DataContextProvider>
      <RouterProvider router={router} />
  </DataContextProvider>
  
  

)
