import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Mainlayout from '../Mainlayout.jsx'
import Home from './Components/Home/Home.jsx'
import Error404 from './Components/Error404.jsx'
import AddData from './Components/Add Data/AddData.jsx'


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
  }
]}

])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={routercreate}></RouterProvider>
  </React.StrictMode>,
)
