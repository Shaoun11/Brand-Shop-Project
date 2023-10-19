import { split } from 'postcss/lib/list';
import React from 'react';

const Applecart = ({Applee}) => {
    const {name,img,BrandName,description,Price, type, rating}=Applee;
    return (
        <div>

            <div className="card card-compact  w-[380px] h-[580px] bg-stone-300 shadow-xl">
  <figure><img className='w-[200px] mt-8' src={img} alt="Shoes" /></figure>
  <div className="card-body">
                
  <div className="w-full flex-none text-sm flex items-center text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-red-500 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span class="text-gray-900 whitespace-nowrap mr-3">{rating}</span><span class="mr-2 text-gray-900">Bangladesh</span>
                </div>
            
<div>
<h2 className="card-title">{name}</h2>
<h1 className='text-base font-semibold'>Type:{type}</h1>
<h1 className='text-base font-semibold'>Price:{Price}</h1>
    <h1 className='text-base font-semibold'>Brand:{BrandName}</h1>
    <p className='text-sm font-medium'><span className='font-serif'>Description:</span>{description.slice(0,150)}.....</p>

</div>
    <div className="card-actions ">
      <button className="btn bg-red-500 border-none text-white btn-primary">Details </button>
    </div>
  </div>
</div>

   
        </div>
    );
};

export default Applecart;