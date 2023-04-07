import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Navbar from './component/navbar/Navbar';
import Error from './component/ErrorHandler/Error';
import Home from './component/home/Home';
import About from './component/about/About';
import Main from './component/layout/Main';

const router = createBrowserRouter([
  {
    path : "/",
    element : <Main></Main>,
    errorElement : <Error></Error>,
    children : [
      {
        path : "/",
        element : <Home></Home>,
        loader :() => fetch('shirts.json')
      },
      {
        path : "/about",
        element : <About></About>
      }
    ] 
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
