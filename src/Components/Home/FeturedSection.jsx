import React from 'react';

const FeturedSection = () => {
    return (
        <div>
            <section className="px-4 py-24 mx-auto max-w-7xl">
                <h1 className='text-7xl text-center font-semibold mt-32 mb-24 '>Our<span className='text-red-500'>Features</span></h1>
  <div className="grid items-center grid-cols-1 mb-24 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
    <div>
      <h2 className="mb-4 text-2xl font-bold tracking-tight text-center text-black md:leading-tight sm:text-left md:text-4xl">Flexible, secure phone plans from Google.</h2>
      <p className="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
      Google Fi Wireless makes it easy for families to stay connected with 4G LTE, nationwide 5G for supported phones, hotspot tethering, and more. Get an unlimited phone plan for your family for just $80/month.2,3,4
      </p>
      <a href="#" className="w-full btn btn-dark btn-lg text-red-500 sm:w-auto">Learn More</a>
    </div>
    <div className="w-full h-full  ">
        <img className='rounded-lg w-[780px]' src="https://i.ibb.co/YZVHjXy/6559254-sd-32525-removebg.png" alt="" />
    </div>
  </div>
  <div className="grid flex-col-reverse items-center grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
    <div className="order-none md:order-2">
      <h2 className="mb-4 text-2xl font-bold tracking-tight text-center text-black md:leading-tight sm:text-left md:text-4xl">USB-Compatible.</h2>
      <p className="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
      The new USB-C connector lets you charge your Mac or iPad with the same cable you use to charge iPhone 15. You can even use iPhone 15 to charge Apple Watch or AirPods.6 Bye-bye, cable clutter.
      </p>
      <a href="#" className="w-full btn btn-dark btn-lg text-red-500 sm:w-auto">Learn More</a>
    </div>
    <div className="w-full h-full ">

        <img className='w-[720px]' src="https://i.ibb.co/98Ky3Pd/iphone-15-dozjxuchowcy-large-2x-removebg-preview-1.png" alt="" />
    </div>
  </div>
</section>

        </div>
    );
};

export default FeturedSection;