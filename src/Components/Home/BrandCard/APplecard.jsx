/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Applecart from './Applecart';
import Footer from '../../Footer/Footer';



const Applecard = () => {
    const [brand,setbrand]=useState([])
    const {Apple}=useParams();
    console.log(Apple);
   
    const brands=useLoaderData();

      
    useEffect(()=>{
        const findApple=brands?.filter((phone)=>phone.BrandName==Apple)
        setbrand(findApple)
    },[Apple,brands])
    

    return (
        <div className='bg-stone-100'>
            <div>
            <div className="   carousel w-full">
         
         <div id="slide1" className="carousel-item   relative w-full">
           <img 
            src="https://i.ibb.co/s26VqrZ/Blue-Minimalist-Travel-Banner.png" className=" w-full h-[80vh]  " />
           
           <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
             <a href="#slide4" className="btn btn-circle">❮</a> 
             <a href="#slide2" className="btn btn-circle">❯</a>
           </div>
           
         </div> 
         <div id="slide2" className="carousel-item relative w-full">
           <img src="https://i.ibb.co/dr04W7J/Blue-Minimalist-Travel-Banner-4.png" className="w-full h-[80vh]" />
           <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
             <a href="#slide1" className="btn btn-circle">❮</a> 
             <a href="#slide3" className="btn btn-circle">❯</a>
           </div>
         </div> 
         <div id="slide3" className="carousel-item relative w-full">
           <img src="https://i.ibb.co/jf1QsRQ/Blue-Minimalist-Travel-Banner-5.png" className="w-full h-[80vh]" />
           <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
             <a href="#slide2" className="btn btn-circle">❮</a> 
             <a href="#slide4" className="btn btn-circle">❯</a>
           </div>
         </div> 
         <div id="slide4" className="carousel-item relative w-full">
           <img src="https://i.ibb.co/W3sZSsS/Blue-Minimalist-Travel-Banner-3.png" className="w-full h-[80vh]" />
           <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
             <a href="#slide3" className="btn btn-circle">❮</a> 
             <a href="#slide1" className="btn btn-circle">❯</a>
           </div>
         </div>
    
       </div>
            </div>
            <div>
<h1 className='text-7xl font-semibold text-center mt-16 pb-32 text-black'>Our <span className='text-red-500'>{Apple}</span> Product</h1>
            </div>
          <div className='grid lg:grid-cols-3 pb-14 gap-8 grid-cols-1 lg:ml-[114px] md:ml-0 ml-5 md:grid-cols-2 max-w-7xl mx-auto'>
            
          {
            brand.map(apple=><Applecart Applee={apple}></Applecart>)
          }
          </div>
          <Footer></Footer>
        </div>
    );
};

export default Applecard;