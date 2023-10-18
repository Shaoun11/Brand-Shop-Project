

const Banner = () => {
    return (
        <div>
        <section
        
          className="relative  bg-[url(https://i.ibb.co/HVTCxzG/Blue-Minimalist-Travel-Banner-6.png)] bg-cover bg-center bg-no-repeat"
        >
          <div
            className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/50 lg:to-white/10 md:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
          ></div>
        
          <div
            className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
          >
            <div className="max-w-xl">
              <h1 className="lg:text-6xl md:text-6xl text-3xl lg:ml-0 ml-28 md:ml-0 mr-40">
                Let us find your
          <br />
                <strong className="  mr-[60px]  font-bold text-rose-700">
                  Best Phone
                </strong>
              </h1>
        
              <p className="mt-4 lg:ml-0 ml-28 md:ml-0 max-w-lg mr-40 text-sm sm:text-xl/relaxed">
              Welcome to our Phone Shop, Discover the latest smartphones, accessories!
              </p>
        
              <div className="mt-8  flex flex-wrap gap-4 text-center">
                <a
                  href="#"
                  className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                >
                  Get Started
                </a>
        
                <a
                  href="#"
                  className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* <div>
            <img className='w-full' src="https://img.freepik.com/premium-photo/summer-vanilla-perfume-background-photo-with-copy-space-bright-pink-vanilla-perfume-banner-summer-ai-generative_974186-289.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1696809600&semt=ais" alt="" />
        </div> */}
        </div>
    );
};

export default Banner;