
import {  useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdatedData = () => {
 
    const navigated=useNavigate();
 const alldata=useLoaderData();
 console.log(alldata);
 const {_id,name,img,BrandName,description,Price, type, rating}=alldata;
    const handleform=e=>{
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const img=form.img.value;
        const BrandName=form.BrandName.value;
        const rating=form.rating.value;
        const Price=form.Price.value;
        const type=form.type.value;
        const description=form.description.value;
       
        const dataup={name,img,BrandName,rating,Price,type,description}
       
        fetch(`http://localhost:5000/phones/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataup),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount>0) {
            Swal.fire({
                title: 'success',
                text: 'you Updated succesfully',
                icon: 'success',
                confirmButtonText: 'Good Job'
               
              })
             
            }
         navigated(`/${BrandName}`)
          
      });
    }


    return (
        <div className="lg:flex bg-stone-100  md:flex items-center justify-center">
        <div>
            <img className="h-[400px]" src="https://i.ibb.co/HnP9Qdj/360-F-254878309-P62oik-Pc8zu9-TQjr4j2-Xp-Ekl5d-FBa6ep-removebg-preview.png" alt="" />
        </div>
          <div className="flex  items-center justify-center p-12">

<div className="mx-auto w-full max-w-[550px]">
<h1 className="text-3xl text-center font-semibold">Updated Product on: <span className='text-red-500'>{name}</span></h1>
  <form onSubmit={handleform}  >
    <div className="mb-5">
      <label
        for="name"
        className="mb-3 block text-base font-medium text-[#07074D]"
      >
        Full Name
      </label>
      <input
     defaultValue={name}
        type="text"
        name="name"
        id="name"
        placeholder="Name"
        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
      />
    </div>
    <div className="mb-5">
      <label
        for="img"
        className="mb-3 block text-base font-medium text-[#07074D]"
      >
       Photo URL
      </label>
      <input
      defaultValue={img}
        type="text"
        name="img"
        id="img"
        placeholder="Photo URL"
        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
      />
    </div>
    <div className="-mx-3 flex flex-wrap">
      <div className="w-full px-3 sm:w-1/2">
        <div className="mb-5">
          <label
            for="fName"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Brand Name
          </label>
          <input
          defaultValue={BrandName}
            type="text"
            name="BrandName"
            id="fName"
            placeholder="Brand Name"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
      </div>
      
        <div className="mb-5">
          <label
            for="fName"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Rating
          </label>
          <input
          defaultValue={rating}
            type="text"
            name="rating"
            id="fName"
            placeholder="Rating"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>

      <div className="w-full px-3 sm:w-1/2">
        <div className="mb-5">
          <label
            for="lName"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
           Price
          </label>
          <input
          defaultValue={Price}
            type="text"
            name="Price"
            id="price"
            placeholder="Price"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
      </div>
      <div className="w-full px-3 sm:w-1/2">
        <div className="mb-5">
          <label
            for="lName"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
           Type
          </label>
          <input
          defaultValue={type}
            type="text"
            name="type"
            id="price"
            placeholder="Type"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
      </div>
     
    </div>
    <div className="mb-5">
      <label
        for="message"
        className="mb-3 block text-base font-medium text-[#07074D]"
      >
     Short Descriptin
      </label>
      <textarea
        rows="4"
        defaultValue={description}
       name="description"
        id="description"
        placeholder="Type your description"
        className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
      ></textarea>
    </div>
    <div>
      <button
        className="hover:shadow-form rounded-md bg-red-500 py-3 px-8 text-base font-semibold text-white outline-none"
      >
    Updated Product
      </button>
    </div>
  </form>
</div>
</div>
      </div>
    );
};

export default UpdatedData;