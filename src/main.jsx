import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Mainlayout from '../Mainlayout.jsx'
import Home from './Components/Home/Home.jsx'
import Error404 from './Components/Error404.jsx'
import AddData from './Components/Add Data/AddData.jsx'
import About from './Components/About/About.jsx'

import NavContact from './Components/Contact/NavContact.jsx'
import Brand from './Components/Home/BrandCard/Brand.jsx'


const routercreate=createBrowserRouter([{
  path:"/",
  element:<Mainlayout></Mainlayout>,
  errorElement:<Error404></Error404>,
  children:[
    {
     path:"/",
     element:<Home></Home>,
     loader:()=>fetch("./phne.json")
  },
    {
     path:"/adddata",
     element:<AddData></AddData>
  },
    {
     path:"/about",
     element:<About></About>
  },
    {
     path:"/contact",
     element:<NavContact></NavContact>
  },
    {
     path:"/brand",
     element:<Brand></Brand>,
     loader:()=>fetch("http://localhost:5000/phones")
  }
]}

])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={routercreate}></RouterProvider>
  </React.StrictMode>,
)
