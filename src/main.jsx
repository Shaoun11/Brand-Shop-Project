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
import Applecard from './Components/Home/BrandCard/APplecard.jsx'
import UpdatedData from './Components/Add Data/UpdatedData.jsx'
import Details from './Components/Home/HomeCard/Details.jsx'
import Login from './Components/Authentication/Login.jsx'
import AuthProvider from './Components/Authrovider/Authprovider.jsx'
import PrivateRoute from './Components/PrivateRoute.jsx'
import Register from './Components/Authentication/Register.jsx'
import Mycart from './Components/Mycart/Mycart.jsx'



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
     path:"/:Apple",
     element:<Applecard></Applecard>,
     loader:()=>fetch("http://localhost:5000/phones")
  },
    {
     path:"/updatedata/:id",
     element:<PrivateRoute><UpdatedData></UpdatedData></PrivateRoute>,
     loader:({params})=>fetch(`http://localhost:5000/phones/${params.id}`)
   
  },
    {
     path:"/detailsCard/:id",
     element:<PrivateRoute><Details></Details></PrivateRoute>,
     loader:({params})=>fetch(`http://localhost:5000/phones/${params.id}`)
   
  },
    {
     path:"/mycart",
     element:<PrivateRoute><Mycart></Mycart></PrivateRoute>,
     loader:()=>fetch('http://localhost:5000/mycart')
   
  },
    {
     path:"/login",
     element:<Login></Login>
   
  },
    {
     path:"/register",
     element:<Register></Register>
   
  }
]}

])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<AuthProvider>   <RouterProvider router={routercreate}></RouterProvider></AuthProvider>
  </React.StrictMode>,
)
