import { split } from 'postcss/lib/list';
import React from 'react';
import { Link } from 'react-router-dom';

const Applecart = ({Applee}) => {
    const {_id,name,img,BrandName,description,Price, type, rating}=Applee;
    return (
        <div>

            <div className="card card-compact  w-[380px] h-[580px] bg-stone-300 shadow-xl">
  <figure><img className='w-[200px] mt-8' src={img} alt="Shoes" /></figure>
  <div className="card-body">
                
  <div className="space-x-1 flex  mt-9">
                <svg className="w-4 h-4 mx-px fill-current text-orange-600" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 14 14">
                    <path
                        d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z">
                    </path>
                </svg>
                <svg className="w-4 h-4 mx-px fill-current text-orange-600" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 14 14">
                    <path
                        d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z">
                    </path>
                </svg>
                <svg className="w-4 h-4 mx-px fill-current text-orange-600" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 14 14">
                    <path
                        d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z">
                    </path>
                </svg>
                <svg className="w-4 h-4 mx-px fill-current text-orange-600" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 14 14">
                    <path
                        d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z">
                    </path>
                </svg>
                <p className='font-medium text-base -mt-[3px]'>{rating}</p>
                
                
            </div>
            
<div>
<h2 className="card-title">{name}</h2>
<h1 className='text-base font-semibold'>Type:{type}</h1>
<h1 className='text-base font-semibold'>Price:{Price}</h1>
    <h1 className='text-base font-semibold'>Brand:{BrandName}</h1>
    <p className='text-sm font-medium'><span className='font-serif'>Description:</span>{description.slice(0,150)}.....</p>

</div>
    <div className="card-actions flex ">
    <div>
   <Link to={`/detailsCard/${_id}`}> <button className="btn btn-sm bg-red-500 border-none text-white btn-primary">Details </button></Link>
    </div>
    <div>
<Link to={`/updatedata/${_id}`} >    <button className="btn btn-sm bg-red-500 border-none text-white btn-primary">Update </button></Link>
    </div>
    </div>
  </div>
</div>

   
        </div>
    );
};

export default Applecart;