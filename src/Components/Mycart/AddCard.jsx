import React from 'react';
import Swal from 'sweetalert2';
const AddCard = ({cart, setdata,datacart}) => {
    console.log(datacart);
    const {_id,name,img,description,Price}=cart;
  const handle=_id=>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        
      fetch(`https://my-project-xi-sable.vercel.app/phones/${_id}`,{
          method:"DELETE"
      })
      .then(res=>res.json())
      .then(data=>{
          console.log(data);
          if (data.deletedCount >0) {
              Swal.fire(
                  'Deleted!',
                  'Your cart has been deleted.',
                  'success'
                ) 
                const remaining =datacart.filter(datas=>datas._id!==_id)
                setdata(remaining)
          }
      })
      console.log(_id);
      }
    })
  }

    return (
        <div>
            <section   className="">
  
  <div   className="m-4 mx-auto max-w-5xl rounded-md border border-gray-100 text-gray-600 shadow-md">
    <div   className="relative flex h-full flex-col text-gray-600 md:flex-row">
      <div   className="relative p-8 md:w-4/6"> 
        <div   className="flex flex-col md:flex-row">
          <h2   className="mb-2 text-2xl font-black">{name}</h2>
        
        </div>
        <p   className="mt-3 font-sans text-base tracking-normal">{description.slice(0,144)}....</p>
        <div   className="flex flex-col md:flex-row md:items-end">
          <p   className="mt-6 text-4xl font-black">{Price}<sup   className="align-super text-sm"></sup></p>
          <span   className="ml-2 text-xs uppercase">258 Sales</span>
        </div>
        <div   className="mt-8 flex flex-col sm:flex-row">
          <button   className="mr-2 mb-4 flex cursor-pointer items-center justify-center rounded-md bg-emerald-400 py-2 px-8 text-center text-white transition duration-150 ease-in-out hover:translate-y-1 hover:bg-emerald-500">
            <svg xmlns="http://www.w3.org/2000/svg"   className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Buy now
          </button>
          <button onClick={()=>handle(_id)}   className="mr-2 mb-4 flex cursor-pointer items-center justify-center rounded-md border py-2 px-8 text-center text-gray-500 transition duration-150 ease-in-out hover:translate-y-1 hover:bg-rose-500 hover:text-white"   >Delete</button>
        </div>
      </div>
      <div   className="mx-auto flex items-center px-5 pt-1 md:p-8">
        <img   className="block w-[300px] h-[300px] max-w-full rounded-md shadow-lg" src={img} alt="Shop image" />
      </div>
    </div>
  </div>
  
  </section>
        </div>
    );
};

export default AddCard;